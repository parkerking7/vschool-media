var app = angular.module("CompanyApp.Auth");

app.controller("LoginController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {

    $scope.login = function (user) {
        UserService.login(user).then(function (response) {
            var name = response.data.user.name;
            $location.path("/home");
            toastr.success("Log in successful, welcome " + name);
        }, function (response) {
            toastr.error(response.data.message);
        });
    }
}]);