blogUiModule.controller("CharityCtrl", [
    '$scope',
    'fundraiserService',
    function($scope, fundraiserService) {
        $scope.virginGivingUrl = "http://uk.virginmoneygiving.com/fundraiser-web/fundraiser/showFundraiserProfilePage.action?userUrl=RoryandJeremy&isTeam=true";
        $scope.coolEarthUrl = "https://www.coolearth.org/campaigns/9019/rory-jeremys-mongol-rally-on-motorbikes-6/";
        $scope.bhfUrl = "https://www.bhf.org.uk/about-us";
        $scope.dementiaUrl = "https://www.dementiauk.org/";
        $scope.mindUrl = "www.mind.org.uk";
}]);