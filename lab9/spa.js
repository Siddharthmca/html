var app = angular.module('myApp', [], ['ui.bootstrap']);
var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
        templateUrl: 'aboutus.html',
        controller: 'FirstController'
    })

    .when('/manipulate', {
        templateUrl: 'manipulate.html',
        controller: 'SecondController'
    })

    .when('/mechanicdata', {
        templateUrl: 'mechanicdata.html',
        controller: 'ThirdController'
    })

    .otherwise({
        redirectTo: '/'
    });
});


app.controller('FirstController', function($scope) {
    $scope.message = 'We build a strong community for a better future';
    $scope.message2 = 'Welcome to discussion cube';
});


app.controller('SecondController', function($scope, $http) {
    $http.get('https://raw.githubusercontent.com/Joseph-k-iype/html/master/lab8/sample.json')
        .success(function(response) {
            $scope.names = response.data;
        });
});

app.controller('ThirdController', function($scope, $http) {
    $http.get('https://raw.githubusercontent.com/Joseph-k-iype/html/master/lab8/sample.json')
        .success(function(response) {
            $scope.names = response.data;
            $scope.rowlimit = 10;
        });
});