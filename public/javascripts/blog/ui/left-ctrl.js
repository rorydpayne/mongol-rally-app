blogUiModule.controller('LeftCtrl', ['$scope', '$timeout', '$mdSidenav', '$log', '$location', function($scope, $timeout, $mdSidenav, $log, $location) {

    $scope.showAboutSubList = false;

    openSubListIfAtPath();



    function openSubListIfAtPath() {
        if (isAtAboutPath())
            $scope.showAboutSubList = true;
    }

    function closeSubListIfAtPath() {
        if (!isAtAboutPath())
            $scope.showAboutSubList = false;
    }

    function isAtAboutPath() {
        var paths = ['/route', '/car', '/bikes', '/team'];
        return paths.indexOf($location.path()) != -1;
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