(function() {
 'use strict';
 angular.module('homeController', [])
   .controller('homeCtrl', homeCtrl)

   function homeCtrl(kanyeRest){
     var hCtrl = this

     hCtrl.name = "Home Controller"
     
     hCtrl.getAlbumInfo = function(albumName) {
      kanyeRest.getAlbums(albumName)
       .then(function(response){
         console.log('from my api for album: ', response.data)
         
         hCtrl.songs = []
         
         for(var i = 0; i < response.data.result.length; i++) {
            hCtrl.songs[i] = response.data.result[i] //.title  
         }
         
       })        
     }
     
     hCtrl.getLyricsInfo = function(albumName, songIndex) {
      kanyeRest.getAlbums(albumName)
       .then(function(response){
         console.log('from my api for album: ', response.data)
         
         console.log('lyrics for ' + response.data.result[songIndex].title + ': ', response.data.result[songIndex].lyrics)
         
         hCtrl.curLyrics = response.data.result[songIndex].lyrics
         
       })   
     }
       
       
     kanyeRest.getTrack('famous')
       .then(function(response){
         console.log('from my api track name: ', response)
       })
     }
}());