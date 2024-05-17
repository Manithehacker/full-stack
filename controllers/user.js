const model =require( "../model/userModel")
const testFunction=async(req,res)=>{
    console.log("test")
    try{
        const data={
            ...req.body
        } 
        console.log(data)
        const Success=await model.create(data)
        console.log(Success)
        res.json({
            data:data,
            message:"Success"
        })
        
    }
    catch(err)
    {
        res.json({
            Error:err.message
        })
        console.log(err)
    }
}

module.exports= {
    testFunction,
}
