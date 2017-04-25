var app = angular.module("CompanyApp.Auth");

app.service("AuthInterceptor", ["$q", "$location", "TokenService", function ($q, $location, TokenService) {
    this.request = function(config) {
        var token = TokenService.getToken();
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = "Bearer " + token;
        }
        return config;
    };

    this.responseError = function(response) {
        if (response.status === 401) {
            TokenService.removeToken();
            $location.path("/login");
        }
        return $q.reject(response);
    };
}]);

