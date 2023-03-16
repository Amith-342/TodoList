const express = require("express")
const app = express();
const connectDB = require("../db/connect");
const cors = require("cors")
const bodyParser = require("body-parser")
app.use(cors());
// app.use(
//     bodyParser.urlencoded({
//      extended: true
//     }))
app.use(express.json())

const port = process.env.PORT||5000;

const Product = require("../models/products")


const start = async () =>{
    await connectDB();
    //await Product.create(Prods);
    app.listen(port,()=>{
        console.log("Running in port ",port);
    })
}

start();

app.get("/",async (req,res)=>{
    myData = await Product.find({});
    res.json({myData});

})

// app.get("/add",(req,res)=>{
//     res.sendFile(__dirname+"/server/form.html");
// })

app.post("/add", async (req,res)=>{
    console.log(req.body.name);
   var product = new Product({
        name:req.body.name,
        price:req.body.price
    })
    await product.save();
   // res.redirect("/");
})

app.delete("/todo/delete/:id",async (req,res)=>{
    console.log(req.params.id);
const todo = await Product.findByIdAndDelete(req.params.id);
})

