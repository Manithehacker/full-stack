const express =require("express");
const app = express();
app.use(express.json());

const connect = require("./config/dataBase");
const registerRoute=require("./routes/userRoutes")
//database connection



app.use(registerRoute)
connect()
app.listen(4000, () => {
  console.log("server is running");
});
