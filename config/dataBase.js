const mongoose =require( "mongoose");

const connectionDB=()=>{


mongoose.connect("mongodb://0.0.0.0:27017/test").then(()=>console.log("------ Database connected -------")).catch((err)=>console.error(err))
}

module.exports=connectionDB