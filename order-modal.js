const mongoose=require("mongoose");

const orderschema=new mongoose.Schema ({
   
    customer_id:{
type:String
    },
    inventory_id:{
type:String
    },
    item_name:{
        type:String,
         required:true,
 },quantity:{
    type:Number
 }
})

const orderModal=mongoose.model("order",orderschema);

module.exports=orderModal;

