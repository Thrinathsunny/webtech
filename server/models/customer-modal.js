const mongoose=require("mongoose");

const customerschema=new mongoose.Schema ({
   
    customer_id:{
type:String
    },
     customer_name:{
type:String
    },
    email:{
        type:String,
         required:true,
 }
})

const customerModal=mongoose.model("customersignup",customerschema);

module.exports=customerModal