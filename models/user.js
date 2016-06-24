  var mongose=require("mongoose");
  var bcrypt= require("bcrypt-nodejs");
  var Schema=mongose.Schema;


  var UserSchema = new Schema({
     name :String,
     lastname : String,
     email : {type:String , unique:true},
     identification : { type :String , unique :true},
     password : String,
     faculty : String,
     university_ident : { type :String, unique : true},
     adminuser : Boolean
  });

  UserSchema.pre('save',function(next)
  {
    var user=this;

    if(!user.isModified())return next();

    bcrypt.genSalt(10,function(err,salt)
    {

      if(err) return next();
      bcrypt.hash(user.password,salt,null,function(err,hash)
      {

        if(err) return next(err);
        user.password=hash;
        next();
      })
    });});

    UserSchema.methods.comparePassword=function(password)
    {
                     return bcrypt.compareSync(password,this.password)
    };

   module.exports=mongose.model('User',UserSchema);
