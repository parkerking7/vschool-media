var app = angular.module("CompanyApp");

app.service("companyService", ["$http", function ($http) {

    this.getId = function(){
        return $http.get("http://localhost:3000/api/company/getId").then(function(response){
            return response.data
        })
    };

    this.getAll = function(){
        return $http.get("http://localhost:3000/api/company/all").then(function(response){
            return response.data;
        })
    };
    this.edit = function(id, add){
        return $http.put("http://localhost:3000/api/company/" + id, add).then(function(response){
            return response.data
        })
    };
this.getUsers = function(){
        return $http.get("http://localhost:3000/api/company/").then(function(response){
            return response.data
        })
};
this.newCompany = function(comp){
    return $http.post("http://localhost:3000/api/company/", comp).then(function(response){
        return response.data;
    })
}

}]);