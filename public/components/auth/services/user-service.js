var app = angular.module("CompanyApp.Auth");

app.service("UserService", ["$http", "$location", "TokenService", function ($http, $location, TokenService) {
    this.signup = function (user) {
        return $http.post("/auth/signup", user);
    };

    this.login = function (user) {
        return $http.post("/auth/login", user).then(function (response) {
            TokenService.setToken(response.data.token);
            return response;
        });
    };

    this.logout = function () {
        TokenService.removeToken();
        $location.path("/");
    };

    this.isAuthenticated = function () {
        return !!TokenService.getToken();
    };
}]);