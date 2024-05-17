const express =require("express");
const app = express();
const port=4000
app.use(express.json());

const connect = require("./config/dataBase");
const registerRoute=require("./routes/userRoutes")
//database connection



app.use(registerRoute)

connect()
app.listen(port, () => {
  console.log(`----- server is running on  ${port} port ------`);
});
