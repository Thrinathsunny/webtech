const customerModal=require("./models/customer-modal");
const { updateOne } = require("./models/inventorytable");
const inventoryModal = require("./models/inventorytable");


const checkExistinguser = async (email) => {
    let existinguser = false
    await customerModal.find({ email: email }).then((userData) => {
        if (userData.length) {
            existinguser = true
        }
    })
    return existinguser
};

const updateInventory = async (vinod,available,count)=>{
    
  
    let final = available-count
 
 await  inventoryModal.findOneAndUpdate({inventory_id:vinod},{available_quantity:final},(err,data)=>{
if(err){
    console.log(err)
}else{
console.log(data)
}
 }).
return
}


module.exports={checkExistinguser,updateInventory}