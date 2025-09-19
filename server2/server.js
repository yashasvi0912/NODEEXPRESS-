import express from "express"
import kuchBhi from "./script.js"
import xyz from "./script2.js"

import { data1, data2, doSomthing } from "./script3.js"
import { doSomthing2 } from "./script3.js"

import anything from "./script3.js"

// Server setup
let port = 5001
let app = express()

// Testing imports
console.log("got some data:", kuchBhi)
console.log("xyz object:", xyz)
console.log("data1:", data1)
console.log("data2:", data2)

doSomthing()
doSomthing2()

console.log("default import from script3.js:", anything)

// Routes
app.get("/", (req, res) => {
    res.send("got this message from backend !")
})

// Start server
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
