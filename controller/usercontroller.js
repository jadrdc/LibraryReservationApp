var UserSchema=require('../models/user');


var UserControler = function ()
{

 this.saveUser=function(name,lastname,password,email,identification,faculty,university_ident,adminuser,next)
 {
   var user= new UserSchema();
    user.name=name;
     user.lastname=lastname;
     user.email=email;
     user.identification=identification;
     user.password=password;
     user.faculty=faculty;
     user.university_ident=university_ident;
     user.adminuser=adminuser;
     user.save(next);
  };
  this.findUserByIdentification=function(identification,next)
   {
        UserSchema.findOne({identification:identification},function(err,user)
       {
        next(err,user);
       });
   }

   this.findUserById=function(_id,next)
    {
         UserSchema.findById({_id:_id},function(err,user)
        {
         next(err,user);
        });
    }

  this.removeUser=function()
       {
             UserSchema.findOneAndRemove({identification:identification},function(err,user)
            {
             next(err,user);
            });
      }
};
module.exports=UserControler;
