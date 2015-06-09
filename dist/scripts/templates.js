(function(module) {
try { module = angular.module("app-templates"); }
catch(err) { module = angular.module("app-templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("tutorial.html",
    "<div class=\"clear\" ng-repeat=\"element in tutorial\" ng-click=\"showNotes = !showNotes\">\n" +
    "    <h1 class=\"title\" ng-if=\"element.type=='title'\">{{element.text}}</h1>\n" +
    "    <p class=\"paragraph\" ng-if=\"element.type=='paragraph'\">{{element.text}}</p>\n" +
    "    <img class=\"image\" ng-if=\"element.type=='image'\" src=\"{{element.url}}\" />\n" +
    "\n" +
    "    <div class=\"notes\" ng-if=\"element.hasOwnProperty('notes')\" ng-show=\"showNotes\">\n" +
    "        <p  ng-repeat=\"note in element.notes\">{{note.note}}</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"element.type=='branches'\" ng-repeat=\"branch in element.branches\">\n" +
    "        <div class=\"branch\" ng-class=\"{selected: tutorial.selectedBranch==branch}\"\n" +
    "             ng-click=\"tutorial.selectedBranch = branch\">\n" +
    "            {{branch}}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <tutorial ng-if=\"element.type=='branch' && tutorial.selectedBranch==element.name\"\n" +
    "              tutorial=\"element.branch\"></tutorial>\n" +
    "</div>");
}]);
})();
