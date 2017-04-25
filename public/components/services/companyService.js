var app = angular.module("CompanyApp");

app.service("companyService", ["$http", function ($http) {

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
}

}]);