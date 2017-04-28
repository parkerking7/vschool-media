var app = angular.module("CompanyApp");

app.service("companyService", ["$http", function ($http) {

    this.getId = function(){
        return $http.get("api/company/getId").then(function(response){
            return response.data
        })
    };

    this.getAll = function(){
        return $http.get("api/company/all").then(function(response){
            return response.data;
        })
    };
    this.edit = function(id, add){
        return $http.put("api/company/" + id, add).then(function(response){
            return response.data
        })
    };
this.getUsers = function(){
        return $http.get("api/company/").then(function(response){
            return response.data
        })
};
this.newCompany = function(comp){
    return $http.post("api/company/", comp).then(function(response){
        return response.data;
    })
}

}]);