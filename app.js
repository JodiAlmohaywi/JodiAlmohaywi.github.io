angular.module('MyApp', [])
  .controller('LunchCheckController', function ($scope) {
    $scope.checkLunch = function () {
      var lunchItems = $scope.lunchItems;

      if (!lunchItems || lunchItems.trim() === '') {
        $scope.message = 'Please enter data first.';
        $scope.messageStyle = { color: 'red' };
        $scope.textBoxStyle = { 'border-color': 'red' };
        return;
      }

      var items = lunchItems.split(',');
      var nonEmptyItemCount = 0;
      for (var i = 0; i < items.length; i++) {
        if (items[i].trim() !== '') {
          nonEmptyItemCount++;
        }
      }

      if (nonEmptyItemCount <= 3) {
        $scope.message = 'Enjoy!';
        $scope.messageStyle = { color: 'green' };
        $scope.textBoxStyle = { 'border-color': 'green' };
      } else {
        $scope.message = 'Too much!';
        $scope.messageStyle = { color: 'green' };
        $scope.textBoxStyle = { 'border-color': 'green' };
      }
    };
  });
