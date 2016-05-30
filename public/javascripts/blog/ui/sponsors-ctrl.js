blogUiModule.controller('SponsorsCtrl', ['$scope', 'fundraiserService', function($scope, fundraiserService) {

    $scope.getSponsorsPdf = function() {
        fundraiserService.getSponsorshipPdf(function(data) {
           //todo
        }, function(error) {
            //todo
        });
    }
}]);