//creating token and saving in cookie

const sendtoken = (user,statusCode,res)=>{
    const token = user.getJWTTOKEN();
    //option for cookie
    const options = {
        expires: new Date(
            Date.now() + process.env.cookie_expire * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }
    res.status(statusCode).cookie("token",token,options).json({
        success:true,
        user,
        token
    })
}
module.exports=sendtoken