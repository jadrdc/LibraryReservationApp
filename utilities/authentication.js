var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;
var UserController=require('../controller/usercontroller');


passport.serializeUser(function(user,done)
{
    done(null,user._id);
});

passport.deserializeUser(function(_id,done)
{
  var userManager= new   UserController();
    userManager.findUserById(_id,function(err,user)
        {
             done(err,user);
       });
});

passport.use('local-login',
              new LocalStrategy ({
                  usernameField :'university_ident',
                  passwordField : 'password',
                  passReqToCallback : true
              },
              function(req,university_ident,password,done){
                var userManager= new   UserController();
                userManager.findUserByIdentification(university_ident,function(err,user){
                  if(err)
                  {
                      return next(err);
                  }
                  else if(!user)
                  {
                    done(null,false);
                  }
                  else if (!user.comparePassword(password))
                  {
                    
                    done(null,false);
                  }
                  else
                  {
                    return done(null,user);
                  }

                });
              }));

exports.isAuthenticaded=function(req,res,next)
              {
                if(req.isAuthenticaded())
                {
                  return next();
                }
                else {

                  res.redirect("/login");
                }

              }
