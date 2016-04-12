blogUiModule.controller("ContactCtrl", ['$scope', '$http', function($scope, $http) {

    $scope.send = function(formDetails) {
        if (formDetails.firstName == null || formDetails.lastName == null || formDetails.email== null
        || formDetails.message == null) {
            return;
        }
        $http.post("/send-message", formDetails)
            .success(function(response) {
                console.log(response);
            })
            .error(function(error) {
                console.log(error);
            })
    };
}]);