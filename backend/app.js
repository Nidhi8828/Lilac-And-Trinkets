const express = require("express");
const app = express();
const connectDatabase = require("./config/database");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const order=require("./routes/orderroute")

// Load environment variables
dotenv.config({ path: "./config/config.env" });

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Connect to the database
// connectDatabase();

// Define your routes and other middleware
// ...

// Start the server


// Log when the server is connected


// Handle server errors
// server.on("error", (error) => {
//     console.error("Server error:", error);
// });


app.use(express.json());
const product=require("./routes/productroute");
const user=require("./routes/userroutes");
app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);
module.exports=app