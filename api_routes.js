// =====START GLOBAL VAR DECLARATION=====
var
  ctrls     = require('./server_controllers.js'),
  apiRouter = require('express').Router()

  apiRouter.route('/kanye/count/:count')
    .get(ctrls.kanye.getCount)
  

  apiRouter.route('/kanye/:album')
    .get(ctrls.kanye.getAlbum)


  apiRouter.route('/kanye/track/:track')
    .get(ctrls.kanye.getTrack)



module.exports = apiRouter
