var app = angular.module("mainApp", []);

// app.filter("myFilter", function(){
//     return function(input, option){
//         if(isNaN(option) || option == ""){
//             return input;
//         }
//         else 
//         {
//             return input.substring(0, option).toUpperCase();
//         }
//     }
// });

app.filter("myFilter", function () {
    return function (input, option) {
        var output = [];
        if (isNaN(option) || option == "") {
            return input;
        }
        else {
            angular.forEach(input, function (value, key) {
                if (value.id > option) {
                    output.push(value);
                }
            });
            return output;
        }
    }
});
app.controller("UserController", function ($scope, $http) {


    $http.get('sample.json').success(function (response) {
        $scope.users = response;
    });


});

$scope.pagination = function () {

    $scope.curPage = 1,
        $scope.itemsPerPage = 3,
        $scope.maxSize = 5;

    this.items = users;


    $scope.numOfPages = function () {
        return Math.ceil(users.length / $scope.itemsPerPage);

    };

    $scope.$watch('curPage + numPerPage', function () {
        var begin = (($scope.curPage - 1) * $scope.itemsPerPage),
            end = begin + $scope.itemsPerPage;

        $scope.filteredItems = users.slice(begin, end);
    });

}

// app.controller('UserController', function ($scope) {

//     $scope.curPage = 1,
//         $scope.itemsPerPage = 3,
//         $scope.maxSize = 5;

//     this.items = users;


//     $scope.numOfPages = function () {
//         return Math.ceil(users.length / $scope.itemsPerPage);

//     };

//     $scope.$watch('curPage + numPerPage', function () {
//         var begin = (($scope.curPage - 1) * $scope.itemsPerPage),
//             end = begin + $scope.itemsPerPage;

//         $scope.filteredItems = users.slice(begin, end);
//     });
// });


