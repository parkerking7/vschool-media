var app = angular.module("CompanyApp", ["ngRoute", "CompanyApp.Auth"]);


app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html",
            controller: "HomeController"
        })
        .when("/companies", {
            templateUrl: "components/companies/companies.html",
            controller: "CompanyController"
        })


}]);