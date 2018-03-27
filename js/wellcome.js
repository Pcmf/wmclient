/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('wmApp').controller('wellcomeController',function($scope,$rootScope,$http,$location,$timeout){
    
    //hashCode of company that is on url
    var hashCode = $location.search().m;
    sessionStorage.hashCode = hashCode;
    //dont show the flags on the landing page
    $scope.showLangs = false;
    //get company information from DB
    $http({
            url:'php/getStart.php',
            method:'POST',
            data:{param:JSON.stringify(hashCode)}
        }).then(function(resp){
            $rootScope.cmp = resp.data;
            sessionStorage.company = JSON.stringify(resp.data);
            sessionStorage.langs = resp.data.langs;
            $rootScope.langs = JSON.parse(resp.data.langs);

        //Check if the device has already a cookie 
        if(getCookie(hashCode) != ""){
            $timeout(function(){
                $rootScope.LG = getCookie(hashCode);
                sessionStorage.LG = $rootScope.LG;
                window.location.replace('#/menu');
            },4000);
        } else {
            $scope.langs = JSON.parse(resp.data.langs);
            $scope.showLangs = true;
            //TODO - show small painel with cookie message
            $scope.cookieInfoShow = true;
            $timeout(function(){
               $scope.cookieInfoShow = false; 
            },5000);
        }
        
    });
    
    $scope.selectLang = function(lg){
        setCookie(hashCode,lg,100);
        $rootScope.LG = lg;
        window.location.replace('#/menu');
    };
    
    
   
    
    
    //Check for Cookies
    function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    
});
