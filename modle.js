//schema
import mongoose from "mongoose" 
try {
    mongoose
      .connect("mongodb://0.0.0.0:27017/test")
      .then((e) => console.log("database connected"))
      .catch((err) => console.log(err));
  } catch (e) {
    console.log(e.message)
  }
  
const testSchema=new mongoose.Schema({
    name:{
        type:String
    },
    password:{
        type:String
    }
})

//model 

const testModel=mongoose.model("practice",testSchema)
export default testModel

