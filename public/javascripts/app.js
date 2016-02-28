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
            $routeProvider.otherwise({
                redirectTo: '/'
            });

            $locationProvider.html5Mode({
                enables: true,
                requireBase: false
            });


        }])
    .config(['$mdThemingProvider', function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('cyan')
            .accentPalette('pink');
    }]);

var blogDomainModule = angular.module('blogDomain', []);
var blogAppModule = angular.module('blogApp', []);
var blogInfrastructureModule = angular.module('blogInfrastructure', []);
var blogUiModule = angular.module('blogUi', []);
var blogModule = angular.module('blog', ['blogDomain', 'blogApp', 'blogInfrastructure', 'blogUi']);