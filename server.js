const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose");
const inventoryModal=require("./models/inventorytable")
const customerModal=require("./models/customer-modal")
const orderModal=require("./models/order-modal")
const {checkExistinguser,updateInventory}=require("./utility")
mongoose.connect("mongodb://localhost/api_web_tech_assignment", (data) => {
  console.log('connected to db ')
}, (err) => {
  console.log(err)
})



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())


app.listen( 3001, (err) => {
    if (!err) {
        console.log("server started")
    } else {
        console.log(err)
    }
})

app.get('/', (req, res) => {
    res.send("base route")
})

app.post("/addinventory",(req,res)=>{
    inventoryModal.create({inventory_id:req.body.inventory_id,inventory_type:req.body.inventory_type,item_name:req.body.item_name,available_quantity:req.body.available_quantity}).then(()=>{
        res.status(200).send("inventory added sucessfully")
    }).catch((err)=>{
res.status(400).send(err)
    })
})

app.post("/customersignup", async (req, res) => {
    if (await checkExistinguser(req.body.email)) {
        res.status(200).send("email already exist")
    } else {
            customerModal.create({ customer_id: req.body.customer_id,  customer_name: req.body. customer_name, email: req.body.email }).then((data) => {
                res.status(200).send(`${req.body.email} signedup sucessfully`)
            }).catch((err) => {
                res.status(400).send(err.message)
            })
        
    }
})


app.post("/order",(req,res)=>{
   
    orderModal.create({customer_id:req.body.customer_id,inventory_id:req.body.inventory_id,item_name:req.body.item_name,quantity:req.body.quantity}).then(()=>{
        res.status(200).send("order placed sucessfully") 
        updateInventory(req.body.inventory_id)
    }).catch((err)=>{
res.status(400).send(err)
    })
})





