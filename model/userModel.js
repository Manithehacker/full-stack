
const mongoose =require( "mongoose")

const testSchem=new mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    File:{
        type:String
    }
})

const testModel=mongoose.model("mvc",testSchem)
module.exports=testModel