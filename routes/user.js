  var router = require('express').Router();
  var  UserController=require('../controller/usercontroller');
  var authentication=require('../utilities/authentication');
  var passport= require('passport');


  router.get('/signup',function (req,res,next)
  {
       res.render('./accounts/signup',{error:req.flash('error')});
  });

  router.post('/signup',function (req,res,next)
  {

  var userManager= new UserController();

    userManager.saveUser(req.body.name,
                         req.body.lastname,req.body.password,
                         req.body.email,req.body.identification,
                         req.body.faculty,req.body.university_ident,req.body.adminuser,
                        function(err)
                      {
                        if (err)
                          {
                            req.flash('error','Usuario, Identicacion o  Correo ya estan registrados');

                              res.redirect('/signup');
                          }
                        else
                        {
                               res.redirect('/profile');
                        }});});

  router.get('/login',function(req,res,next)
{
  console.log ('Get Login');
   res.render('./accounts/login',{error :req.flash('error')});

});

router.get('/logout',function(req,res,next)
{
    req.logout();
 res.render('./accounts/login',{error :req.flash('error')});

});



router.post("/login",passport.authenticate('local-login',{
  successRedirect: "/profile",
  failureRedirect : "/login",
  failureFlash: 'Usuario o Contraseña Invalido'
}));


router.get('/profile',function(req,res)
{
  console.log ('Get profile');

  res.render('./accounts/profile');

});

router.get('/return',function(req,res){
  res.redirect('/profile');
});






  module.exports=router;
