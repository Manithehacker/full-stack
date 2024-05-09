import express from "express"


const app=express()
app.get("/",(req,res)=>{
    res.send("HI this is from server")
})

app.get("/login",(req,res)=>{
    res.send("This is the login page")
})
app.listen(4000,()=>{
    console.log("server is running")
})
