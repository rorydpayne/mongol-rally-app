blogUiModule.controller("CharityCtrl", [
    '$scope',
    'fundraiserService',
    function($scope, fundraiserService) {
        $scope.rowcroftWebUrl = "http://www.rowcrofthospice.org.uk";
        $scope.rowcroftDonateUrl = "http://uk.virginmoneygiving.com/fundraiser-web/fundraiser/showFundraiserProfilePage.action?userUrl=RoryandJeremy&isTeam=true";
        $scope.coolEarthDonateUrl = "https://www.coolearth.org/campaigns/8986/rory-jeremys-mongol-rally-on-motorbikes/";
        $scope.coolEarthWebUrl = "https://www.coolearth.org/";
        $scope.bhfWebUrl = "https://www.bhf.org.uk/about-us";
        $scope.bhfDonateUrl = "http://www.virginmoneygiving.com/team/easternramblers2016-Pete";
        $scope.dementiaWebUrl = "https://www.dementiauk.org/";
        $scope.dementiaDonateUrl = "http://uk.virginmoneygiving.com/fundraiser-web/fundraiser/showFundraiserProfilePage.action?userUrl=easternramblers&isTeam=true";
        $scope.mindWebUrl = "http://www.mind.org.uk";
        $scope.mindDonateUrl = "http://uk.virginmoneygiving.com/fundraiser-web/fundraiser/showFundraiserProfilePage.action?userUrl=KatlynGreen";
}]);