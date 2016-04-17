'use strict';

angular.module('app', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngAria', 'ngMessages', 'blog'])
    .config(['$routeProvider', '$httpProvider', '$locationProvider',
        function($routeProvider, $httpProvider, $locationProvider) {
            $httpProvider.defaults.useXDomain = true;
            $httpProvider.defaults.timeout = 60000;

            $routeProvider.when('/', {
                templateUrl: '/assets/partials/home.html',
                controller: 'HomeCtrl'
            });
            $routeProvider.when('/team', {
                templateUrl: '/assets/partials/home.html',
                controller: 'HomeCtrl'
            });
            $routeProvider.when('/route', {
                templateUrl: '/assets/partials/route.html',
                controller: 'HomeCtrl'
            });
            $routeProvider.when('/charity', {
                templateUrl: '/assets/partials/charity.html',
                controller: 'CharityCtrl'
            });
            $routeProvider.when('/bikes', {
                templateUrl: '/assets/partials/bikes.html'
            });
            $routeProvider.when('/car', {
                templateUrl: '/assets/partials/car.html'
            });
            $routeProvider.when('/contact', {
                templateUrl: '/assets/partials/contact.html',
                controller: 'ContactCtrl'
            });

            $routeProvider.otherwise({
                redirectTo: '/'
            });

            $locationProvider.html5Mode(true);


        }])
    .config(['$mdThemingProvider', function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('cyan')
            .accentPalette('pink');
    }])
    .run(['$rootScope', '$location', function($rootScope, $location) {
        $rootScope.$on("$routeChangeStart", function(event, next, current) {
            $rootScope.currentPath = $location.path();
        });
    }]);

var blogDomainModule = angular.module('blogDomain', []);
var blogAppModule = angular.module('blogApp', []);
var blogInfrastructureModule = angular.module('blogInfrastructure', []);
var blogUiModule = angular.module('blogUi', []);
var blogModule = angular.module('blog', ['blogDomain', 'blogApp', 'blogInfrastructure', 'blogUi']);