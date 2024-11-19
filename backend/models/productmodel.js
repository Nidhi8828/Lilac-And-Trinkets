const mongoose =require("mongoose");

const productitem=new mongoose.Schema(
    {name:{
        type:String,
        required:[true,"Enter the name of the product"]
    },
    category:{
        type:String,
        required:[true,"Enter the category of the product"]
    },
    price:{
        type:Number,
        required:[true,"Enter the price"],
        maxlength:[6,"The price cannot exceed 10 lakh"]
    },
    description:{
        type:String,
        // required:[true,"Enter the description"]
    },
    stock:{
        type:Number,
        required:[true,"Enter the stock"],
        maxlen:[5,"The stock cannot exceed 1 lakh"],
        default:1
    },
    reviews:[{
        name:{
            type:String,
            required:[true,"Enter the name of the person"]
        },
        rating:{
            type:Number,
           default:0
        },
        comment:{
            type:String,
        }
    }],
    rating:{
        type:Number,
        default:0
    },
    images:[{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }],
    createdAt:{
        type:Date,
        default:Date.now
    },
    numofre:{
        type:Number,
        default:0
    }
    }
) ;

module.exports=mongoose.model("Product",productitem);

// {
//     "name":"Notebooks",
//     "price":"70",
//     "Stock":"100",
//     "category":"books",
//     "images":{
//         "public_id":"sample",
//         "url":"sampleurl"
//     },
//     "rating":2
// }