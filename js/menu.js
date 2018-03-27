/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('wmApp').controller('menuController',function($scope,$rootScope,$http){
  var company = JSON.parse(sessionStorage.company); 
  $scope.LG = sessionStorage.LG;
  $rootScope.cmp = JSON.parse(sessionStorage.company);
//  $rootScope.langs = JSON.parse(sessionStorage.langs);
    $http({
           url:'php/getMainMenu.php',
           method:'POST',
           data:{param:company.company}
       }).then(function(resp){
         $scope.type = resp.data.type;
         $scope.langs = resp.data.langs;
         $scope.cats = resp.data.cats;

         $scope.started = false;  
    });
    
  //    //Altera o Idioma 
    $rootScope.changeLang = function(lg){
        $scope.LG = lg;
        $rootScope = lg;
        sessionStorage.LG = lg;
    };
    
});
