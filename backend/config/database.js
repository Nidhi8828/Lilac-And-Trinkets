const mongoose=require("mongoose")
const connectDatabase=( )=>{
    mongoose.connect(process.env.DB_URI,{
       
    }).then((data)=>{
        console.log(`Server connected to database `)
    })
}
module.exports=connectDatabase;