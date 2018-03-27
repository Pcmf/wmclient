/* 
 * Guardar como cookie o idioma selecionado. 
 * Quando inicia, se não existir cookie, na pagina inicial vai
 * avisar o uso de cookies e pedir para selecionar o idioma.Guardar o idioma selecionado como cookie.
 * Se ao iniciar existir cookie com idioma passa a usar esse.
 * 
 * Se não existir cookie, a pagina inicial apresenta os idiomas que pode selecionar.
 * Se já existir cookie então mostra uma imagem por uns segundos e depois passa para a pagina do menu 
 * 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//http://localhost/WMClient/#/?m=$2a$10$49b57cb66185ea512e994OOMW9caCaXxJlGiHs%2FfGvBwR5asOpQ2y


var app = angular.module('wmApp',['ngRoute']);

/**
 * Routing
 */
app.config(function($routeProvider){
    $routeProvider
//            .when('/wellcome',{templateUrl:'views/wellcome.html',controller:'wellcomeController'})
            .when('/menu',{templateUrl:'views/menu.html',controller:'menuController'})
            .when('/list/:id',{templateUrl:'views/list.html',controller:'listController'})
             .when('/detail/:id',{templateUrl:'views/detail.html',controller:'detailController'})
            .otherwise({templateUrl:'views/wellcome.html',controller:'wellcomeController'});
});

//Controller mainCtrl
app.controller('mainCtrl',function($scope){
      
});

