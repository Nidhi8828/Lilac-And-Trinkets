const app = require("./app");
const dotenv = require("dotenv"); // Corrected import
const cloudinary=require("cloudinary")
const connectdatabse=require("./config/database")
dotenv.config({ path: "backend/config/config.env" }); // Fixed variable name
// import {v2 as cloudinary} from 'cloudinary';

// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => {
//     console.log(`The server is running on port ${PORT}`);
// });

// app.listen(process.env.PORT,()=>{
//     console.log(`The server is running on port ${process.env.PORT}`);
//    });

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  console.log("Cloudinary configuration completed");

// Debugging statements for environment variables
console.log("CLOUDINARY_NAME:", process.env.CLOUDINARY_NAME);
console.log("CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY);
console.log("CLOUDINARY_API_SECRET:", process.env.CLOUDINARY_API_SECRET);

//handling uncaught exception
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log('shutting down server due to uncaught exception')
    process.exit(1);
})

connectdatabse()
const server=app.listen(process.env.PORT, () => {
    console.log("Server working");
});
process.on("unhandledRejection",err=>{
    console.log(`error:${err.message}`);
    console.log(`shutting down the server`)
    server.close(()=>{
        process.exit(1)
    })
})

// const app = require("./app");
// const dotenv = require("dotenv"); 
// const cloudinary = require("cloudinary").v2; // Importing v2 for Cloudinary
// const connectDatabase = require("./config/database");

// // Load environment variables from .env file
// dotenv.config({ path: "backend/config/config.env" });

// // Connect to the database
// connectDatabase();

// // Configure Cloudinary
// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Start the server
// const server = app.listen(process.env.PORT, () => {
//     console.log(`The server is running on port ${process.env.PORT}`);
// });

// // Handling uncaught exceptions
// process.on("uncaughtException", (err) => {
//     console.error(`Error: ${err.message}`);
//     console.log('Shutting down server due to uncaught exception');
//     process.exit(1);
// });

// // Handling unhandled promise rejections
// process.on("unhandledRejection", (err) => {
//     console.error(`Error: ${err.message}`);
//     console.log(`Shutting down the server`);
//     server.close(() => {
//         process.exit(1);
//     });
// });
