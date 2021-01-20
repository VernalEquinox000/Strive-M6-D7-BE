const express = require("express");
const server = express();
const cors  = require("cors")
const services = require("./services")

server.use(express.json())

server.use("/api",services)

server.use(cors())

const port = process.env.PORT || 5000;

server.listen(port,()=>{
    console.log('Server running on port', port )
});


server.on("error",(error)=>{
    console.error('Server not running!  ' + error )
});