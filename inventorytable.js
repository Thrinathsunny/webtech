const mongoose=require("mongoose");

const inventoryschema=new mongoose.Schema ({
    inventory_id:{
      type:String,
      required:true,
  },
  inventory_type:{
      type:String,
      required:true,
  },
  item_name:{
    type:String,
    required:true,
  },
  available_quantity:{
    type:Number,
    required:true,
  }
})

const inventoryModal=mongoose.model("inventory",inventoryschema);

module.exports=inventoryModal