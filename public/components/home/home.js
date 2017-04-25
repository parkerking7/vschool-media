var app = angular.module("CompanyApp");

app.controller("HomeController", ["$scope","companyService", function ($scope,companyService) {

    $scope.companies = [];

companyService.getAll().then( function(response){
    $scope.companies.push(response);
});
$scope.hired = function(comp){
    comp.hired++;
    companyService.edit(comp._id, comp).then(function(response){
    });
    };
    $scope.interviewed = function(comp){
        comp.interviewed++;
        companyService.edit(comp._id, comp).then(function(response){
        });
    };
    $scope.applied = function(comp){
        comp.applied++;
        companyService.edit(comp._id, comp).then(function(response){
        });
    };

}]);