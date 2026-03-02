(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

// Protecting from minification
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.message = "";
  $scope.fontColor = "";
  $scope.borderColor = "";

  $scope.checkLunch = function () {
    // Check for completely empty input
    if ($scope.dishes.trim() === "") {
      $scope.message = "Please enter data first";
      $scope.fontColor = "font-red";
      $scope.borderColor = "border-red";
      return;
    }

    // Split the string by commas
    var items = $scope.dishes.split(',');
    
    // Bonus: Filter out empty items (like ", ,")
    var validItems = items.filter(function(item) {
      return item.trim() !== "";
    });

    // Check the count of valid items
    if (validItems.length <= 3) {
      $scope.message = "Enjoy!";
      $scope.fontColor = "font-green";
      $scope.borderColor = "border-green";
    } else {
      $scope.message = "Too much!";
      $scope.fontColor = "font-green";
      $scope.borderColor = "border-green";
    }
  };
}

})();