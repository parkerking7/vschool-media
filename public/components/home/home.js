var app = angular.module("CompanyApp");

app.controller("HomeController", ["$scope","companyService", function ($scope,companyService) {


    companyService.getAll().then(function (response) {
        $scope.companies = response.companies;
        $scope.userId = response.user._id;
        $scope.admin = response.user.admin;
    });

$scope.deleteButton = function(comp, $index){
  companyService.delete(comp).then(function(response){
      $scope.companies.splice($index,1);
      toastr.success(`${comp.name} has been deleted`);
  })
};


    $scope.isActive = false;

    $scope.activeButton = function(){
        $scope.isActive = !$scope.isActive
    };
    $scope.close = function(){
        $scope.isActive = false;
    };

    $scope.hired = function(comp) {
        var found = false;
        var name = comp.name.charAt(0).toUpperCase() + comp.name.slice(1);
        var user = $scope.userId;
        for (var i = 0; i < comp.hiredButton.length; i++) {
            if (comp.hiredButton[i] === user) {
                found = true;
                toastr.error("You have already stated that you have been hired at " + name);
                    }
            }
            if (found === false) {
                comp.hired++;
                comp.hiredButton.push(user);
                companyService.edit(comp._id, comp).then(function (response) {
                    toastr.success("You have been hired at " + name);
                })
            }
        };

    $scope.interviewed = function(comp) {
        var found = false;
        var name = comp.name.charAt(0).toUpperCase() + comp.name.slice(1);
        var user = $scope.userId;
        for (var i = 0; i < comp.interviewedButton.length; i++) {
            if (comp.interviewedButton[i] === user) {
                found = true;
                toastr.error("You have already stated that you have recieved an interview at " + name);
            }
        }
        if (found === false) {
            comp.interviewed++;
            comp.interviewedButton.push(user);
            companyService.edit(comp._id, comp).then(function (response) {
                toastr.success("You have been interviewed at " + name);
            })
        }
    };




    $scope.applied = function(comp) {
        var found = false;
        var name = comp.name.charAt(0).toUpperCase() + comp.name.slice(1);
        var user = $scope.userId;
        for (var i = 0; i < comp.appliedButton.length; i++) {
            if (comp.appliedButton[i] === user) {
                found = true;
                toastr.error("You have already stated that you have applied at " + name);
            }
        }
        if (found === false) {
            comp.applied++;
            comp.appliedButton.push(user);
            companyService.edit(comp._id, comp).then(function (response) {
                toastr.success("You have applied at " + name);
            })
        }
    };


    $scope.addNewComp = function(company){
        $scope.isActive = false;
        $scope.comp = {};
        companyService.newCompany(company).then(function(response){
            $scope.companies[0].push(response);
        });
    };

}]);

app.filter('capitalize', function() {
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});