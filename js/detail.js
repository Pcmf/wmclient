/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('wmApp').controller('detailController',function($scope,$rootScope,$http,$routeParams){
  var company = JSON.parse(sessionStorage.company); 
  $rootScope.cmp = JSON.parse(sessionStorage.company);
  $rootScope.langs = JSON.parse(sessionStorage.langs);
  $scope.LG = sessionStorage.LG;
  var parm = {};
  parm.companyId = company.company;
  parm.id = $routeParams.id;

    $http({
           url:'php/getProductById.php',
           method:'POST',
           data:{param:JSON.stringify(parm)}
       }).then(function(resp){
        //   $scope.category = resp.data.category;
            $scope.p = resp.data;
    });
   
});