angular.module('MyApp', [])
  .controller('LunchCheckController', function ($scope) {
    $scope.checkLunch = function () {
      var lunchItems = $scope.lunchItems;

      if (!lunchItems || lunchItems.trim() === '') {
        $scope.message = 'Please enter data first.';
        return;
      }

      var items = lunchItems.split(',');
      if (items.length <= 3) {
        $scope.message = 'Enjoy!';
      } else {
        $scope.message = 'Too much!';
      }
    };
  });
