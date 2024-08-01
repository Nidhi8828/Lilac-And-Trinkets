const mongoose = require("mongoose");
const validator = require("validator");
const dotenv = require("dotenv");
const bcrypt=require('bcryptjs');
const jwt=require("jsonwebtoken");
const cryptos=require("crypto");
const validatepassword=(value)=>{
    let cntchar=0;
    let cntnum=0;
   
    for(var i=0;i<value.length;i++)
    {if(!isNaN(value[i]))
    cntchar++;
else cntnum++;
    }
if(cntchar==0||cntnum==0)
return false;
else
return true;
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
       
        maxLength: [30, "Name cannot exceed 30 letters"],
        minLength: [2, "Name should be at least 2 letters"],
        required: [true, "Please enter your name"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minLength: [8, "Password should be at least 8 characters long"],
        validate: [validatepassword, "Password should contain atleast 1 number"],
        select: false // This ensures that the password won't be returned in query results by default
    },
    avatar: {
        public_id: {
            type: String,
            // required: true
        },
        url: {
            type: String,
            // required: true
        }
    },
    role: {
        type: String
        // Define any additional properties or constraints for the 'role' field if needed
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
});
userSchema.pre("save",async function(next){
    try {
        if (!this.isModified('password')) {
            return next();
        }

        // Hash the password only if it's modified or new
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (error) {
        next(error); // Pass any errors to the next middleware function
    }
})
userSchema.methods.getJWTTOKEN=function(){//anyone shouldnt get the token
return jwt.sign({id:this._id},process.env.jwt_secret,{expiresIn:process.env.jwt_expire})//to log out automatically after soemtime
}
//compare password
userSchema.methods.comparePassword=async function(enteredpassword){
    return await bcrypt.compare(enteredpassword,this.password);
}
//genearting user reset password token
// userSchema.methods.getuserpasswordtoken=function(){
//     //generating token
//     const resettoken=cryptos.randomBytes(20).toString("hex");
// //hashing and adding resetpassword to userscehma

//     this.resetPasswordToken=cryptos.createHash("sha256").update(resettoken).digest("hex");//google
//     this.resetPasswordExpire=Date.now()+15*60*1000;
//     return resettoken;
//     //now we want to send a mail




// }
userSchema.methods.getresetpasswordtoken= function () {
    // Generating Token
    const resettoken = cryptos.randomBytes(20).toString("hex");
  
    // Hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = cryptos
      .createHash("sha256")
      .update(resettoken)
      .digest("hex");
  
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  
    return resettoken;
  };
module.exports = mongoose.model("User", userSchema);
