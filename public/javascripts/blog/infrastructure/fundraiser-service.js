blogInfrastructureModule.service("fundraiserService", ['$http', function($http) {

    function getFundraiserSummary(onSuccess) {
        return $http.get('fundraising', null);
    }

    return {
        getFundraiserSummary: getFundraiserSummary
    }
}])