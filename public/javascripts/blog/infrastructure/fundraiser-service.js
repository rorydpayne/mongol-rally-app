blogInfrastructureModule.service("fundraiserService", ['$http', function($http) {

    var instance = new FundraiserService();

    function FundraiserService() {
    }

    FundraiserService.prototype.getFundraiserSummary = function(onSuccess, onError) {
        $http.get('fundraising', null).then(function(response) {
            onSuccess(response.data)
        }, onError);
    };

    FundraiserService.prototype.getSponsorshipPdf = function(onSuccess, onError) {
        $http.get('sponsorship', null).then(function(response) {
            onSuccess(response.data)
        }, onError);
    };

    return instance;
}])