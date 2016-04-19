blogUiModule.controller('LeftCtrl', ['$scope', '$timeout', '$mdSidenav', '$log', '$location', function($scope, $timeout, $mdSidenav, $log, $location) {

    $scope.showAboutSubList = false;

    openSubListIfAtPath();

    function openSubListIfAtPath() {
        if ($location.path() == '/route' || $location.path() == '/car' || $location.path() == '/bikes')
            $scope.showAboutSubList = true;
    }

    function closeSubListIfAtPath() {
        if (!($location.path() == '/route' || $location.path() == '/car' || $location.path() == '/bikes'))
            $scope.showAboutSubList = false;
    }

    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };

    $scope.redirect = function(path) {
        $location.path(path);
//        closeSubListIfAtPath();
        $scope.close();
    };
}]);