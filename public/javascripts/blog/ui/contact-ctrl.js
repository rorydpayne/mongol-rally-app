blogUiModule.controller("ContactCtrl", ['$scope', function($scope) {

    $scope.send = function(formDetails) {
        $http.post("/send-message", formDetails)
            .success(function(response) {

            })
            .error(function(error) {

            })
    };
}]);