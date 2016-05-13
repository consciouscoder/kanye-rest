(function() {
 'use strict';
   angular.module('kanyeFactory',[])
     .factory('kanyeRest', kanyeRest)

     function kanyeRest($http){
       var kFact = {}

       kFact.getAlbums = function(albumName){
         return $http.get('/api/kanye/' + albumName)
       }
       
       kFact.getTrack = function(trackName){
         return $http.get('/kanye/track/' + trackName)
       }       

    //   kFact.getLyrics = function(){
    //      return $http.get('/kanye/track/' + trackName)
    //   }       


       return kFact
     }
}());