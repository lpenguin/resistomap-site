angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("pages/main.html","<div data-ng-if=\"!initializing\">\n  <div class=\"header\">\n    <div class=\"header__main-caption\">RESISTOMAP</div>\n    <div class=\"header__sub-caption\">drug resistance in human gut microbiota</div>\n  </div>\n  <div class=\"filters-container\">\n    <filters data-data=\"data\"></filters>\n  </div>\n  <div class=\"tips-container\">\n    <tips></tips>\n  </div>\n  <div class=\"zoom-buttons-container\">\n    <zoom-buttons></zoom-buttons>\n  </div>\n  <div class=\"content\">\n    <div class=\"content__map-chart\">\n      <map-chart\n        data-data=\"data\"\n        map-data=\"mapData\"></map-chart>\n    </div>\n    <div class=\"content__heatmap-chart inline\">\n      <heatmap-chart data-data=\"data\"></heatmap-chart>\n    </div>\n    <div class=\"content__info-block inline\">\n      <info-block></info-block>\n    </div>\n    <div class=\"content__taxonomy-heatmap\" style=\"float:left\">\n      <taxonomy-heatmap></taxonomy-heatmap>\n    </div>\n    <br class=\"clear-both\" />\n  </div>\n  <div class=\"footer\">\n    <div class=\"footer__info inline\">\n      <p>Visualization by <a class=\"common-link\" href=\"http://www.datalaboratory.pro/\" target=\"_blank\"><span class=\"footer__dl-caption\">Data Laboratory</span></a>, metagenomic analysis by RCPCM. This work was financially supported by Russian Scientific Foundation (grant #15-14-00066).</p>\n      <p>Metagenomic data from\n        <span data-ng-repeat=\"s in studies track by $index\">\n          <a\n            class=\"common-link\"\n            target=\"_blank\"\n            once-href=\"s.link\"\n            once-text=\"s.name\"></a>\n          (<a\n            class=\"common-link\"\n            target=\"_blank\"\n            once-href=\"s.reads\">reads</a>){{$index === studies.length - 1 ? \'.\' : \',\'}}\n        </span>Data used for visualization can be downloaded <a class=\"common-link\" href=\"https://ndownloader.figshare.com/files/7516267?private_link=081a528b7ad55725a2ae\" target=\"_blank\">here</a>. Antibiotic and drug data from <a class=\"common-link\" href=\"https://card.mcmaster.ca/\" target=\"_blank\">CARD</a> and <a class=\"common-link\" href=\"http://bacmet.biomedicine.gu.se/\" target=\"_blank\">BacMet</a>.\n      </p>\n      <p>For citation: <a class=\"common-link\" href=\"https://academic.oup.com/bioinformatics/article-lookup/doi/10.1093/bioinformatics/btx134\" target=\"_blank\">Yarygin KS, Kovarsky BA, Bibikova TS, Melnikov DS, Tyakht AV, Alexeev DG. (2017). Resistomap — online visualization of human gut microbiota antibiotic resistome. Bioinformatics, btx134.</a></p>\n    </div>\n    <div class=\"likely likely-small inline\">\n      <div class=\"twitter\" data-via=\"datalaboratory\" data-title=\"Resistomap:\">Tweet</div>\n      <div class=\"facebook\">Share</div>\n      <div class=\"vkontakte\" data-title=\"Resistomap: http://resistomap.datalaboratory.ru/\">Share</div>\n      <div class=\"pinterest\" data-media=\"http://resistomap.datalaboratory.ru/img/social/i.png\" data-title=\"Resistomap: http://resistomap.datalaboratory.ru/\">Pin</div>\n    </div>\n    <br class=\"clear-both\" />\n  </div>\n</div>\n");
$templateCache.put("directives/custom-select-multi.html","<div\n  class=\"custom-select-multi\"\n  data-ng-class=\"key\"\n  data-ng-style=\"{\'visibility\': isSelectPrepared ? \'visible\' : \'hidden\'}\">\n  <div\n    class=\"custom-select-multi__toggle\"\n    data-ng-class=\"{\'activated\': isListShown}\"\n    data-ng-click=\"toggleList()\">\n    <div data-ng-if=\"!selected.length\">{{\'all \' + plural}}</div>\n    <div data-ng-if=\"selected.length === 1\">\n      <div\n        class=\"inline\"\n        data-ng-if=\"!flagsBefore\">{{selected[0].title}}</div>\n      <div\n        class=\"inline\"\n        data-ng-if=\"selected[0].flags\">\n        <i\n          data-ng-repeat=\"flag in selected[0].flags track by $index\"\n          class=\"flag {{\'twemoji-\' + flag.toLowerCase() + \' \' + (flagsBefore ? \'before-option\' : \'after-option\')}} inline\"></i>\n      </div>\n      <div\n        class=\"inline\"\n        data-ng-if=\"flagsBefore\">{{selected[0].title}}</div>\n      <br class=\"clear-both\" />\n    </div>\n    <div data-ng-if=\"selected.length > 1\">{{\'several \' + plural}}</div>\n  </div>\n  <div\n    class=\"custom-select-multi__dropdown\"\n    data-ng-style=\"{\'visibility\': isListShown ? \'visible\' : \'hidden\'}\">\n    <div\n      class=\"item\"\n      data-ng-repeat=\"item in dataset track by $index\"\n      data-ng-class=\"{\'selected\': isItemSelected(item)}\"\n      data-ng-click=\"selectItem(item)\">\n      <div\n        class=\"inline\"\n        data-ng-if=\"!flagsBefore\">{{item.title}}</div>\n      <div\n        class=\"inline\"\n        data-ng-if=\"item.flags\">\n        <i\n          data-ng-repeat=\"flag in item.flags track by $index\"\n          class=\"flag {{\'twemoji-\' + flag.toLowerCase() + \' \' + (flagsBefore ? \'before-option\' : \'after-option\')}} inline\"></i>\n        <br class=\"clear-both\" />\n      </div>\n      <div\n        class=\"inline\"\n        data-ng-if=\"flagsBefore\">{{item.title}}</div>\n      <br class=\"clear-both\" />\n    </div>\n  </div>\n</div>\n");
$templateCache.put("directives/custom-select.html","<div\n  class=\"custom-select\"\n  data-ng-class=\"key\"\n  data-ng-style=\"{\'visibility\': isSelectPrepared ? \'visible\' : \'hidden\'}\">\n  <div\n    class=\"custom-select__toggle\"\n    data-ng-class=\"{\'activated\': isListShown}\"\n    data-ng-click=\"toggleList()\">{{selected.title}}</div>\n  <div\n    class=\"custom-select__dropdown\"\n    data-ng-style=\"{\'visibility\': isListShown ? \'visible\' : \'hidden\'}\">\n    <div\n      class=\"item\"\n      data-ng-repeat=\"item in dataset track by $index\"\n      data-ng-class=\"{\'selected\': isItemSelected(item)}\"\n      data-ng-click=\"selectItem(item)\">{{item.title}}</div>\n  </div>\n</div>\n");
$templateCache.put("directives/filters.html","<div class=\"filters\">\n  <div class=\"filters__filters\">\n    <substance-filter\n      class=\"inline\"\n      data-data=\"data\"></substance-filter>\n    <custom-select-multi\n      class=\"inline\"\n      data-ng-repeat=\"filter in studyCountryFilters track by $index\"\n      data-key=\"filter.key\"\n      data-dataset=\"filter.dataset\"\n      data-plural=\"filter.plural\"\n      data-selected=\"studyCountryFiltersValues[filter.key]\"\n      data-flags-before=\"filter.flagsBefore\"></custom-select-multi>\n    <div\n      class=\"filters-reset inline\"\n      data-ng-show=\"isResetShown\"\n      data-ng-click=\"resetFilters()\">&#10005;</div>\n    <br class=\"clear-both\" />\n  </div>\n  <div class=\"filters__checkboxes\">\n    <div class=\"caption\">Pool heatmap by</div>\n    <div\n      class=\"checkbox\"\n      data-ng-repeat=\"checkbox in checkboxes track by $index\"\n      data-ng-class=\"{\'disabled\': studyCountryFiltersValues[checkbox].length, \'active\': hovered}\"\n      data-ng-mouseover=\"hovered = true\"\n      data-ng-mouseout=\"hovered = false\"\n      data-ng-click=\"checkboxesValues[checkbox] = !checkboxesValues[checkbox]\">\n      <img\n        class=\"inline\"\n        data-ng-src=\"../img/accessories/checkbox{{hovered ? (checkboxesValues[checkbox] ? \'-checked-hover\' : \'-empty-hover\') : (checkboxesValues[checkbox] ? \'-checked\' : \'-empty\')}}.png\" />\n      <span class=\"caption inline\">{{checkbox.replace(\'f-\', \'\')}}</span>\n      <br class=\"clear-both\" />\n    </div>\n  </div>\n  <div class=\"filters__sort-by\">\n    <div class=\"caption inline\">Sort by</div>\n    <custom-select\n      class=\"inline\"\n      data-key=\"sortBySelect.key\"\n      data-dataset=\"sortBySelect.dataset\"\n      data-selected=\"sortBySelectValue\"></custom-select>\n      <br class=\"clear-both\" />\n  </div>\n</div>\n");
$templateCache.put("directives/heatmap-chart.html","<div class=\"heatmap-chart\">\n  <div class=\"heatmap-chart__header\">\n    <div class=\"samples-caption inline\">samples</div>\n    <div\n      class=\"resistance-group inline\"\n      data-ng-repeat=\"(r, substances) in data.resistances track by $index\">\n      <div\n        class=\"resistance-caption\"\n        once-text=\"r !== \'ABX determinants\' ? r : \'Antibiotics (ABX) determinants\'\">\n      </div>\n      <div\n        class=\"substance-caption sortable inline\"\n        data-ng-repeat=\"s in [\'overall\'].concat(substances.length < 2 ? [] : substances) track by $index\"\n        data-ng-class=\"{\'highlighted\': r === defaultResistance && s === defaultSubstance, \'full\': r === tempResistance && s === tempSubstance}\"\n        data-ng-mouseover=\"substanceMouseOver(undefined, r, s)\"\n        data-ng-mouseout=\"substanceMouseOut()\"\n        data-ng-click=\"substanceMouseClick(undefined, r, s, true)\"\n        data-ng-attr-data-after-content=\"{{(s === \'overall\' ? \'\' : s.substring(1)) + (predicate.resistance && predicate.substance ? (predicate.resistance === r && predicate.substance === s ? (reverseSorting ? \'▲\' : \'▼\') : \'▲\') : \'\')}}\"\n        once-class=\"{\'overall\': s === \'overall\'}\"\n        once-text=\"s === \'overall\' ? (substances.length < 2 ? \'median\' : \'mean\') : s.charAt(0)\"></div>\n      <br class=\"clear-both\" />\n    </div>\n    <br class=\"clear-both\" />\n  </div>\n  <div class=\"heatmap-chart__rows\">\n    <div\n      class=\"row\"\n      data-ng-repeat=\"cohort in cohorts track by $index\"\n      data-ng-class=\"{\'pushed\': cohort.isPushed, \'with-flag\': cohort.flag, \'with-gender\': cohort.gender}\">\n      <i\n        class=\"flag {{\'twemoji-\' + cohort.flag.toLowerCase()}} inline\"\n        data-ng-if=\"cohort.flag\"></i>\n      <i\n        class=\"gender {{cohort.gender.toLowerCase()}} inline\"\n        data-ng-if=\"cohort.gender\"></i>\n      <div\n        class=\"name inline\"\n        overflow>\n        <span class=\"short\">{{cohort.displayName}}</span>\n        <span class=\"full\">{{cohort.displayName}}</span>\n      </div>\n      <div class=\"n-of-samples inline\">{{cohort.samples.length}}</div>\n      <div\n        class=\"resistance-group inline\"\n        data-ng-repeat=\"(r, substances) in data.resistances track by $index\">\n        <div\n          class=\"substance-cell inline\"\n          data-ng-repeat=\"s in [\'overall\'].concat(substances.length < 2 ? [] : substances) track by $index\"\n          data-ng-class=\"{\'highlighted\': r === defaultResistance && s === defaultSubstance, \'frozen\': cohort === frozenCell.cohort && r === frozenCell.resistance && s === frozenCell.substance, \'top\': !$parent.$parent.$index, \'bottom\': $parent.$parent.$index === cohorts.length - 1}\"\n          data-ng-style=\"{\'background-color\': getCellColor(cohort, r, s)}\"\n          data-ng-mouseover=\"substanceMouseOver(cohort, r, s)\"\n          data-ng-mouseout=\"substanceMouseOut()\"\n          data-ng-click=\"substanceMouseClick(cohort, r, s)\"\n          once-class=\"{\'overall\': s === \'overall\'}\"></div>\n        <br class=\"clear-both\" />\n      </div>\n      <br class=\"clear-both\" />\n    </div>\n  </div>\n  <div class=\"heatmap-chart__footer\">\n    <div\n      class=\"resistance-group inline\"\n      data-ng-repeat=\"(r, substances) in data.resistances track by $index\">\n      <div\n        class=\"substance-caption inline\"\n        data-ng-repeat=\"s in [\'overall\'].concat(substances.length < 2 ? [] : substances) track by $index\"\n        data-ng-class=\"{\'highlighted\': r === defaultResistance && s === defaultSubstance, \'full\': r === tempResistance && s === tempSubstance}\"\n        data-ng-mouseover=\"substanceMouseOver(undefined, r, s)\"\n        data-ng-mouseout=\"substanceMouseOut()\"\n        data-ng-click=\"substanceMouseClick(undefined, r, s)\"\n        once-class=\"{\'overall\': s === \'overall\'}\"\n        once-text=\"s === \'overall\' ? (substances.length < 2 ? \'median\' : \'mean\') : s.charAt(0)\"\n        once once-attr-data-after-content=\"s === \'overall\' ? \'\' : s.substring(1)\"></div>\n      <br class=\"clear-both\" />\n    </div>\n    <br class=\"clear-both\" />\n  </div>\n  <div\n    class=\"heatmap-chart__download\"\n    data-ng-mouseup=\"downloadData()\"><a class=\"common-link\">Download</a> heatmap data</div>\n</div>\n");
$templateCache.put("directives/info-block.html","<div class=\"info-block\">\n  <div class=\"info-block__header\">\n    <div>{{substance}}</div>\n    <div>resistance level</div>\n    <div class=\"inline\">{{countryName ? \'in \' + countryName : \'\'}}</div>\n    <i\n      class=\"flag {{\'twemoji-\' + flag.toLowerCase()}} inline\"\n      data-ng-if=\"countryName\"></i>\n    <br class=\"clear-both\" />\n  </div>\n  <div class=\"info-block__legend\">\n    <div\n      class=\"gradient\"\n      data-ng-style=\"{\'background\': \'linear-gradient(to right, \' + legendGradient.join(\', \') + \')\'}\"></div>\n    <div\n      class=\"abundance-value\"\n      data-ng-show=\"abundanceValue !== undefined\"\n      data-ng-bind-html=\"abundanceValue | prepareAbundanceValue | trust\"></div>\n    <div\n      class=\"pointer\"\n      data-ng-style=\"{\'left\': legendPointerX + \'px\'}\"></div>\n    <div\n      class=\"tick\"\n      data-ng-repeat=\"tickValue in legendScale.domain() track by $index\"\n      data-ng-style=\"{\'left\': legendScale(tickValue)}\">\n      <div\n        class=\"dash\"\n        data-ng-if=\"$index\"></div>\n      <div\n        class=\"caption\"\n        data-ng-show=\"$index && !($index % ((legendScale.domain().length - 1) / 2))\"\n        data-ng-if=\"abundanceValue === undefined\"\n        data-ng-bind-html=\"tickValue | prepareAbundanceValue | trust\"></div>\n    </div>\n  </div>\n  <div\n    class=\"info-block__n-of-samples\"\n    data-ng-show=\"nOfSamples\">{{abundanceValueType + \' among \' + nOfSamples + (nOfSamples === 1 ? \' sample\' : \' samples\')}}</div>\n  <div\n    class=\"info-block__top-five-list\"\n    data-ng-show=\"topFiveList && topFiveList.length\">\n    <div class=\"caption\">Gene resistance</div>\n    <div\n      class=\"row\"\n      data-ng-repeat=\"item in topFiveList track by $index\">\n      <div\n        class=\"name inline\"\n        overflow>\n        <span class=\"short\">{{item.name}}</span>\n        <span class=\"full\">{{item.name}}</span>\n      </div>\n      <div\n        class=\"value inline\"\n        data-ng-bind-html=\"item.value | prepareAbundanceValue | trust\"></div>\n      <div\n        class=\"bar inline\"\n        data-ng-style=\"{\'width\': maxBarWidth * item.value / topFiveList[0].value + \'px\', \'background-color\': getBarColor(item.value)}\"></div>\n      <br class=\"clear-both\" />\n    </div>\n  </div>\n  <div\n    class=\"info-block__info-link\"\n    data-ng-show=\"infoLink\">\n    <a\n      class=\"common-link\"\n      target=\"_blank\"\n      data-ng-href=\"{{infoLink}}\">{{substance}}</a> on {{database}}\n  </div>\n</div>\n");
$templateCache.put("directives/substance-filter.html","<div class=\"substance-filter\">\n  <div\n    class=\"substance-filter__toggle\"\n    data-ng-class=\"{\'activated\': isListShown, \'highlighted\': !substanceFilterValue.parent}\"\n    data-ng-click=\"toggleList()\">{{\'for \' + substanceFilterValue.title}}</div>\n  <div\n    class=\"substance-filter__dropdown\"\n    data-ng-style=\"{\'visibility\': isListShown ? \'visible\' : \'hidden\'}\">\n    <div class=\"left-section inline\">\n      <div\n        class=\"item resistance\"\n        data-ng-class=\"{\'selected\': isItemSelected(\'ABX determinants\')}\"\n        data-ng-click=\"selectItem(\'ABX determinants\')\">ABX determinants</div>\n      <div class=\"two-column\">\n        <div\n          class=\"item\"\n          data-ng-repeat=\"item in dataset | filter: {parent: \'ABX determinants\'} track by $index\"\n          data-ng-class=\"{\'selected\': isItemSelected(item)}\"\n          data-ng-click=\"selectItem(item)\">{{item.title}}</div>\n      </div>\n    </div>\n    <div class=\"right-section inline\">\n      <div\n        class=\"item resistance\"\n        data-ng-class=\"{\'selected\': isItemSelected(\'ABX mutations\')}\"\n        data-ng-click=\"selectItem(\'ABX mutations\')\">ABX mutations</div>\n      <div\n        class=\"item\"\n        data-ng-repeat=\"item in dataset | filter: {parent: \'ABX mutations\'} track by $index\"\n        data-ng-class=\"{\'selected\': isItemSelected(item)}\"\n        data-ng-click=\"selectItem(item)\">{{item.title}}</div>\n      <div\n        class=\"item resistance pushed\"\n        data-ng-class=\"{\'selected\': isItemSelected(\'Biocides\')}\"\n        data-ng-click=\"selectItem(\'Biocides\')\">Biocides</div>\n      <div\n        class=\"item resistance\"\n        data-ng-class=\"{\'selected\': isItemSelected(\'Metals\')}\"\n        data-ng-click=\"selectItem(\'Metals\')\">Metals</div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("directives/taxonomy-heatmap.html","<div class=\'taxonomy-heatmap__header\'>\n    <h3>ХИТ-мар!!!</h3>ого это хитмап\n</div>\n<div class=\"caption inline\">Group by</div>\n<custom-select\n    class=\"inline\"\n    data-key=\"colNameSelect.key\"\n    data-dataset=\"colNameSelect.dataset\"\n    data-selected=\"colName\"\n></custom-select>\n<br class=\"clear-both\">\n\n<heatmap-d3 \n    data=\'table\'\n    row-name=\'rowName\' \n    col-name=\'colName.value\' \n    width=\'250\'\n    height=\'350\'\n    margin-left=\'70\'\n    margin-top=\'150\'\n    item-width=\'17\'\n    item-height=\'24\'\n></heatmap-d3>");
$templateCache.put("directives/tips.html","<div class=\"tips\">\n  <div\n    class=\"tips__upload-button\"\n    data-ng-click=\"isInfoShown[\'upload\'] = true\">Add data</div>\n  <div\n    class=\"tips__question-button\"\n    data-ng-click=\"isInfoShown[\'about\'] = true\"></div>\n  <div\n    class=\"tips__info-background\"\n    data-ng-show=\"isInfoShown[\'upload\'] || isInfoShown[\'about\']\"\n    data-ng-click=\"isInfoShown[\'upload\'] = false; isInfoShown[\'about\'] = false\"></div>\n  <div\n    class=\"tips__info\"\n    data-ng-show=\"isInfoShown[\'upload\']\">\n    <h3>Add your data</h3>\n    <p>We welcome community-driven updates to our global map of gut microbiota resistome. If you want to add resistome profiles of interesting published datasets to ResistoMap, please follow these instructions:</p>\n    <ol type=\"1\">\n      <li>Send a request via e-mail <a class=\"common-link\" href=\"mailto:resistomap@gmail.com\">resistomap@gmail.com</a> with general information about the study including PMID reference to the publication presenting the samples, number of samples and brief description of the cohorts;</li>\n      <li>The value and relevance of datasets will be assessed by our experts, and you will be notified about the decision of whether we will include these datasets on ResistoMap or not;</li>\n      <li>In the case of a positive decision, please download the scripts from <a class=\"common-link\" target=\"_blank\" href=\"https://github.com/KonstantinYarygin/ResistoMap\">GitHub repo</a>;</li>\n      <li>Apply the scripts to your datasets according to the instructions;</li>\n      <li>Send us the obtained resistome abundance tables together with the meta-data on the subjects according to the format;</li>\n      <li>After internal validation, the datasets will be added to the ResistoMap together with the information about contributors and reference publication.</li>\n    </ol>\n  </div>\n  <div\n    class=\"tips__info two-columns\"\n    data-ng-show=\"isInfoShown[\'about\']\">\n    <h3>About Resistomap</h3>\n    <div class=\"columns-container\">\n      <div class=\"column inline\">\n        <p>ResistoMap is an interactive visualization of the presence of genetic determinants conferring resistance to antibiotics, biocides and heavy metals in human gut microbiota. ResistoMap displays the data about more than 1600 published gut metagenomes of the world populations including healthy subjects and patients.</p>\n        <p>Resistomap contains two main interactive work fields&nbsp;&mdash; a geographic map and a heatmap. The heatmap displays the median relative levels of determinants conferring resistance to each of antibiotic groups (columns) in each of the selected cohort of subjects (rows). The values were precomputed by classifying the gut metagenomic reads from 12 publicly available studies (see Methods). The number of metagenomes included in the cohort is displayed on the left of the heatmap below the color key.</p>\n        <p>The heatmap contains four vertical sections corresponding to different types of resistome quantification:</p>\n        <ul>\n          <li>Levels of AR-conferring genes;</li>\n          <li>Levels of mutations in the target genes;</li>\n          <li>Levels of genes conferring resistance to biocides (total);</li>\n          <li>Levels of genes conferring resistance to heavy metals (total).</li>\n        </ul>\n      </div>\n      <div class=\"column inline\">\n        <p>Using the drop-down lists at the top of the screen, users can choose the antibiotic group of interest, the study(-ies) and/or the country(-ies) to be displayed on the heatmap. To filter the cohort, users can use “Pool by” checkboxes that allow the stratification of cohorts by country of origin, gender, age and diagnosis (where applicable).</p>\n        <p>It is possible to sort rows of the heatmap. Below the “Pool heatmap by” list, there is a drop-down box “Sort by” containing 2 options: “number of samples” (sorting method enabled by default) and “resistance level”. The rows are sorted in decreasing order of the selected value. Sorting within a group of rows is performed the same way. Additionally, when the “resistance level” option is selected, double-clicking on a column name of the heatmap (a letter denoting antibiotic) allows users to switch between decreasing and increasing order of rows by level of resistance to this antibiotic. For convenience of comparison between close values, clicking on a cell “freezes” the displayed abundance value on the right (click again to “unfreeze”).</p>\n      </div>\n      <br class=\"clear-both\" />\n    </div>\n  </div>\n</div>\n");
$templateCache.put("directives/zoom-buttons.html","<div class=\"zoom-buttons\">\n  <div\n    class=\"zoom-buttons__button zoom-in\"\n    data-ng-class=\"{\'disabled\': !canZoomIn}\"\n    data-ng-click=\"zoomIn()\"></div>\n  <div\n    class=\"zoom-buttons__button zoom-out\"\n    data-ng-class=\"{\'disabled\': !canZoomOut}\"\n    data-ng-click=\"zoomOut()\"></div>\n</div>\n");}]);