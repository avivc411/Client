let app = angular.module('myApp', ["ngRoute"]);

// config routes
app.config(function($routeProvider)  {
    $routeProvider
        // homepage
        .when('/', {
            // this is a template
            template: '<h1>This is the default route</h1>'
        })
        // About
        .when('/About', {
            // this is a template url
            templateUrl: 'pages/About/Favorites.html',
            controller : 'aboutController as abtCtrl'
        })
        // POI
        .when('/POI', {
            templateUrl: 'pages/POI/POI.html',
            controller : 'poiController as poiCtrl'
        })
        .when('/httpRequest', {
            templateUrl: 'pages/http/request.html',
            controller : 'httpController as httpCtrl'
        })
        // other
        .otherwise({ redirectTo: '/' });
});