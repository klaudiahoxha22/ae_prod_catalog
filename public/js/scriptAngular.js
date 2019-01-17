 var app = angular.module('ecommApp', ["ngRoute"]);
 
 app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "html/popularProd.html"
    })
    .when("/contact", {
        templateUrl : "html/contact.html"
    })
    .when("/login", {
        templateUrl : "html/login.html"
    })
    .when("/register", {
        templateUrl : "html/register.html"
    })
    .when("/products", {
        templateUrl : "html/products.html"
    });
});
 
app.controller('myCtrl', function($scope) {
   $scope.showMe=true;
   $scope.showMeSuccess=false;
   $scope.registerFunct = function(){
       if($scope.usrName.$valid && $scope.usrSurname.$valid && $scope.email.$valid){
           $scope.showMe=false;
           $scope.showMeSuccess=true;
       }
   }
});

app.controller('tabCtrl', function($scope, $http){

    $http.get("/products")
    .then(function(response) {
        $scope.produse = response.data;
    });
});


app.controller('menuCtrl', function($scope, $http) {
   $http.get("/categories")
   .then(function(response){
       $scope.categ =response.data;
       
   })
});