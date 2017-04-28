var app = angular.module("CompanyApp");

app.controller("HomeController", ["$scope","companyService", function ($scope,companyService) {


    companyService.getAll().then(function (response) {
        $scope.companies = (response.companies);
        $scope.userId = response.user;
    });


    $scope.isActive = false;

    $scope.activeButton = function(){
        $scope.isActive = !$scope.isActive
    };
    $scope.close = function(){
        $scope.isActive = false;
    };

    $scope.hired = function(comp) {
        var found = false;
        var user = $scope.user;
        for (var i = 0; i < comp.hiredButton.length; i++) {
            if (comp.hiredButton[i] === user) {
                comp.hiredButton.splice(0, 1);
                comp.hired--;
                found = true;
                companyService.edit(comp._id, comp).then(function (response) {
                        return response;
                    }
                )
            }
        }
            if (found === false) {
                comp.hired++;
                comp.hiredButton.push(user);
                companyService.edit(comp._id, comp).then(function (response) {
                    return response;
                })
            }
        };

    $scope.interviewed = function(comp) {
        var found = false;
        var user = $scope.user;
        for (var i = 0; i < comp.interviewedButton.length; i++) {
            if (comp.interviewedButton[i] === user) {
                comp.interviewedButton.splice(0, 1);
                comp.interviewed--;
                found = true;
                companyService.edit(comp._id, comp).then(function (response) {
                        return response;
                    }
                )
            }
        }
        if (found === false) {
            comp.interviewed++;
            comp.interviewedButton.push(user);
            companyService.edit(comp._id, comp).then(function (response) {
                return response;
            })
        }
    };




    $scope.applied = function(comp) {
        var found = false;
        var user = $scope.user;
        for (var i = 0; i < comp.appliedButton.length; i++) {
            if (comp.appliedButton[i] === user) {
                comp.appliedButton.splice(0, 1);
                comp.applied--;
                found = true;
                companyService.edit(comp._id, comp).then(function (response) {
                        return response;
                    }
                )
            }
        }
        if (found === false) {
            comp.applied++;
            comp.appliedButton.push(user);
            companyService.edit(comp._id, comp).then(function (response) {
                return response;
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