var app = angular.module("CompanyApp.Auth");

app.controller("SignupController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {
    $scope.passwordMessage = "";

    $scope.signup = function (user) {
        if (user.password !== $scope.passwordRepeat) {
            $scope.passwordMessage = "Passwords do not match.";
        } else {
            UserService.signup(user).then(function (response) {
                $location.path("/login");
                toastr.success(`Account made successfully, Welcome ${user.name}, please log in.`);
            }, function (response) {
                toastr.error("There was a problem: " + response.data);
            });
        }
    }
}]);