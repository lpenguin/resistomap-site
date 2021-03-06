app.directive 'customSelect', ($document, $timeout) ->
  restrict: 'E'
  replace: true
  templateUrl: 'directives/custom-select.html'
  scope:
    key: '='
    dataset: '='
    selected: '='
  link: ($scope, $element, $attrs) ->
    clickHandler = (event) ->
      return if $element.find(event.target).length

      $scope.isListShown = false
      $scope.$apply()
      $document.unbind 'click', clickHandler
      return

    $scope.toggleList = ->
      $scope.isListShown = not $scope.isListShown

      if $scope.isListShown
        $document.bind 'click', clickHandler
      else
        $document.unbind 'click', clickHandler
      return

    $scope.isItemSelected = (item) ->
      $scope.selected.title is item.title

    $scope.selectItem = (item) ->
      $scope.selected = item
      $scope.isListShown = false
      return

    $timeout ->
      $toggle = $element.find '.custom-select__toggle'
      $dropdown = $element.find '.custom-select__dropdown'
      toggleWidth = $toggle[0].getBoundingClientRect().width
      dropdownWidth = $dropdown[0].getBoundingClientRect().width
      dropdownHasScroll = $dropdown[0].scrollHeight > $dropdown[0].offsetHeight

      dropdownWidth += 16 if dropdownHasScroll

      $toggle.innerWidth Math.max toggleWidth, dropdownWidth
      $dropdown.width Math.max toggleWidth, dropdownWidth
      $scope.isSelectPrepared = true
      return

    return
