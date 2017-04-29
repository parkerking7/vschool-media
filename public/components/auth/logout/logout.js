var app = angular.module("CompanyApp.Auth");

app.controller("LogoutController", ["UserService", function (UserService) {

    UserService.logout();
    toastr.success("You have been logged out successfully");

}]);