blogUiModule.controller("ContactCtrl", ['$scope', '$http', '$mdToast', function($scope, $http, $mdToast) {

    $scope.formDetails = {};

    $scope.send = function() {
        if ($scope.contactForm.$invalid) {
            $scope.contactForm.firstname.$setTouched();
            $scope.contactForm.lastname.$setTouched();
            $scope.contactForm.company.$setTouched();
            $scope.contactForm.email.$setTouched();
            $scope.contactForm.phone.$setTouched();
            $scope.contactForm.message.$setTouched();
            return;
        }
        $http.post("/send-message", $scope.formDetails)
            .success(function(response) {
                $scope.formDetails = {
                    firstName: "",
                    lastName: "",
                    company: "",
                    email: "",
                    phone: "",
                    message: ""
                }
                $scope.contactForm.$setPristine();
                $scope.contactForm.$setUntouched();
                showToast();
            })
            .error(function(error) {
                $scope.contactForm.firstname.$setTouched();
                $scope.contactForm.lastname.$setTouched();
                $scope.contactForm.company.$setTouched();
                $scope.contactForm.email.$setTouched();
                $scope.contactForm.phone.$setTouched();
                $scope.contactForm.message.$setTouched();
            })
    };

    function showToast() {
        $mdToast.show(
          $mdToast.simple()
            .textContent('Message sent!')
            .position("top right")
            .hideDelay(3000)
        );

    }
}]);