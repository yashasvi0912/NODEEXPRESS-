import express from "express"

let app = express()

let port = 7000
 app.get("/",(req,res) =>{
    res.send("welcome to node js !")
 })

 app.listen(port,()=>{
    console.log(`server is runing on port ${port}`)

 })