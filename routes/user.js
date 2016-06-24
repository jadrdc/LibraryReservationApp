  var router = require('express').Router();


  router.get('/signup',function (req,res,next)
  {
       res.render('./accounts/signup');
  });

  router.post('/signup',function (req,res,next)
  {


  });









  module.exports=router;
