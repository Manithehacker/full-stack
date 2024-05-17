

const getRequest=(req,res)=>{
    console.log("test")
    res.json({
        message:"getRequest"
    })
}

module.exports={
    getRequest
}