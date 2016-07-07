app.directive 'heatmapChart', ($rootScope, calculators, colors, tools) ->
  restrict: 'E'
  replace: true
  templateUrl: 'directives/heatmap-chart.html'
  scope:
    data: '='
    colorScale: '='
  link: ($scope, $element, $attrs) ->
    $scope.cohorts = []

    getCohortSamples = (samples, cohortProperties) ->
      samples.filter (s) ->
        _.every _.forIn(cohortProperties), (value, key) ->
          sampleValue = s[key]

          if key is 'f-ages'
            left = parseInt value.split('...')[0]
            right = value.split('...')[1]

            if right is '∞' then right = Infinity else right = parseInt right

            left <= sampleValue <= right
          else
            sampleValue is value

    getCohortResistances = (samples) ->
      cohortResistances = {}

      _.keys $scope.data.resistances
        .forEach (key) ->
          cohortResistances[key] = 'overall': calculators.getAbundanceValue samples, key, 'overall'
          resistanceSubstances = $scope.data.resistances[key]

          return if resistanceSubstances.length < 2

          resistanceSubstances.forEach (s) ->
            cohortResistances[key][s] = calculators.getAbundanceValue samples, key, s
            return
          return

      cohortResistances

    getPermutationsCohorts = (samples, order) ->
      permutationsCohorts = []
      permutations = tools.getPermutations order.map (o) -> $scope.data.filteringFieldsValues[o]

      permutations.forEach (p, i) ->
        cohortProperties = {}

        order.forEach (o, j) ->
          cohortProperties[o] = p[j]
          return

        cohortSamples = getCohortSamples samples, cohortProperties

        return unless cohortSamples.length
        return if cohortSamples.length is samples.length

        name = p.join ', '
        flag = if order[0] is 'f-countries' then p[0] else undefined

        previousCohort = _.last permutationsCohorts
        isPushed = false

        if previousCohort
          isPushed = _.some _.dropRight(order, 1), (o, j) -> p[j] isnt previousCohort.permutation[j]

        permutationsCohorts.push
          permutation: p
          name: name
          flag: flag
          isPushed: isPushed
          nOfSamples: cohortSamples.length
          resistances: getCohortResistances cohortSamples
        return

      permutationsCohorts

    createCohorts = (filtersValues, checkboxesValues) ->
      $scope.cohorts = []

      studies = filtersValues['f-studies'].value
      countries = filtersValues['f-countries'].value
      groupingOrder = _.keys checkboxesValues
        .filter (key) ->
          checkboxesValues[key] and
          (if studies then key isnt 'f-studies' else true) and
          (if countries then key isnt 'f-countries' else true)

      if studies or countries
        rootProperties = {}
        rootProperties['f-studies'] = studies if studies
        rootProperties['f-countries'] = countries if countries
        rootSamples = getCohortSamples $scope.data.samples, rootProperties

        return unless rootSamples.length

        name = if studies and countries then [studies, countries].join(', ') else studies or countries
        flag = if countries and not studies then countries else undefined

        $scope.cohorts.push
          name: name
          flag: flag
          isPushed: false
          nOfSamples: rootSamples.length
          resistances: getCohortResistances rootSamples

        permutationsCohorts = getPermutationsCohorts rootSamples, groupingOrder

        return unless permutationsCohorts.length

        permutationsCohorts[0].isPushed = true
        $scope.cohorts = $scope.cohorts.concat permutationsCohorts
      else
        $scope.cohorts = getPermutationsCohorts $scope.data.samples, ['f-countries']
      return

    $scope.getCellColor = ->
      '#7fd2d1'

    # Events →
    $scope.substanceCellMouseover = (eventData) ->
      $rootScope.$broadcast 'heatmap.substanceChanged', eventData
      return

    $scope.substanceCellMouseout = ->
      $rootScope.$broadcast 'heatmap.substanceChanged', undefined
      return

    # → Events
    $scope.$on 'filters.groupingChanged', (event, eventData) ->
      createCohorts eventData.studyCountryFiltersValues, eventData.checkboxesValues
      return

    return
