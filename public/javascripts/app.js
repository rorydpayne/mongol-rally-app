'use strict';

angular.module('app', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngAria', 'ngMessages', 'blog', 'moment-module'])
    .config(['$routeProvider', '$httpProvider', '$locationProvider',
        function($routeProvider, $httpProvider, $locationProvider) {
            $httpProvider.defaults.useXDomain = true;
            $httpProvider.defaults.timeout = 60000;

            $routeProvider.when('/', {
                templateUrl: '/assets/partials/home.html',
                controller: 'HomeCtrl'
            });
            $routeProvider.when('/team', {
                templateUrl: '/assets/partials/team.html'
            });
            $routeProvider.when('/charity', {
                templateUrl: '/assets/partials/charity.html',
                controller: 'CharityCtrl'
            });
            $routeProvider.when('/sponsors', {
                templateUrl: '/assets/partials/sponsors.html'
            });
            $routeProvider.when('/contact', {
                templateUrl: '/assets/partials/contact.html',
                controller: 'ContactCtrl'
            });
            $routeProvider.when('/blog', {
                templateUrl: '/assets/partials/blog.html',
                controller: 'BlogCtrl'
            });
            $routeProvider.otherwise({
                redirectTo: '/'
            });

            $locationProvider.html5Mode(true);


        }])
    .config(['$mdThemingProvider', function($mdThemingProvider) {
        $mdThemingProvider.definePalette('primary', {
            '50': 'FFFFFF',
            '100': 'E8F5E1',
            '200': 'C8E7B7',
            '300': 'A0D482',
            '400': '8ECD6B',
            '500': '7DC554',
            '600': '6CBB3F',
            '700': '5FA438',
            '800': '528D30',
            '900': '457628',
            'A100': 'FFFFFF',
            'A200': 'E8F5E1',
            'A400': '8ECD6B',
            'A700': '5FA438',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                                // on this palette should be dark or light
            'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
             '200', '300', '400', 'A100'],
            'contrastLightColors': undefined    // could also specify this if default was 'dark'
          });
          $mdThemingProvider.definePalette('accent', {
              '50': 'FFFFFF',
              '100': 'FEECE2',
              '200': 'FDC7AB',
              '300': 'FC9865',
              '400': 'FC8447',
              '500': 'FB7029',
              '600': 'FA5C0B',
              '700': 'E34F04',
              '800': 'C54504',
              '900': 'A63A03',
              'A100': 'FFFFFF',
              'A200': 'FEECE2',
              'A400': 'FC8447',
              'A700': 'E34F04',
              'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                                  // on this palette should be dark or light
              'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
               '200', '300', '400', 'A100'],
              'contrastLightColors': undefined    // could also specify this if default was 'dark'
            });
             $mdThemingProvider.theme('default')
                .primaryPalette('primary')
                .accentPalette('accent')
                .warnPalette('accent')
                .dark();

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
var momentModule = angular.module('moment-module', []).factory('moment', function($window) { return $window.moment; });