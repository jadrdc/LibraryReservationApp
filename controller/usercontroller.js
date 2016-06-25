var UserSchema=require('../models/user');


var UserControler = function ()
{

 this.saveUser=function(name,lastname,password,email,identification,faculty,university_ident,adminuser)
 {
   var user= new User();
     user.name=name;
     user.lastname=lastname;
     user.email=emmail;
     user.identification=identification;
     user.password=password;
     user.faculty=faculty;
     user.university_ident=university_ident;
     user.adminuser=adminuser;
     user.save();
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
