const mongoose = require('mongoose');

//Require schema from mongoose 
const Schema = mongoose.Schema 
//Ceat the user shema 
const ProductSchema = new Schema({
    Name:{
        type:String,

    },
    Prix:{
        type:Number,
    },
    Catgory:{
        type:String , 
    },
    Descraption:{
        type:String , 
    },
    Image:{
        type:String,
    },
    Image02:{
        type:String , 
    }
   
}); 

module.exports=Product= mongoose.model('Product',ProductSchema)