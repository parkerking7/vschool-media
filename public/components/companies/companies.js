var app = angular.module("CompanyApp");

app.controller("CompanyController", ["$scope","companyService", function ($scope, companyService) {

    $scope.companies = [];

    companyService.getUsers().then(function(response){
        $scope.companies.push(response);
    });

    $scope.isActive = false;

    $scope.activeButton = function(){
      $scope.isActive = !$scope.isActive
    };
$scope.close = function(){
  $scope.isActive = false;
};
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