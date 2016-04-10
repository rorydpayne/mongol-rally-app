blogUiModule.controller("CharityCtrl", [
    '$scope',
    'fundraiserService',
    function($scope, fundraiserService) {

//        fundraiserService.getFundraiserSummary()
//            .success(function(data, status, header, config) {
//                $scope.fundraiserSummary = data;
//            })
//            .error(function(data, status, header, config) {
//                //TODO:
//                console.log(data);
//            });
        $scope.virginGivingUrl = "http://uk.virginmoneygiving.com/fundraiser-web/fundraiser/showFundraiserProfilePage.action?userUrl=RoryandJeremy&isTeam=true";
}]);