const mongoose = require("mongoose")

const uri = "mongodb+srv://Amith03:AmithLearner123@learner1.8rk654c.mongodb.net/Learner1?retryWrites=true&w=majority"
const connectDB = () =>{
    mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
}


module.exports = connectDB;
