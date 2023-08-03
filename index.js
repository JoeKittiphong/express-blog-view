const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()

app.use(express.json())
app.use(express.urlencoded({extended : false}))

const webRouter = require("./routers/webRouter")
const blogRouter = require("./routers/blogRouter")

app.use("/web", webRouter)
app.use("/blog", blogRouter)

mongoose.connect(process.env.mongo_url)
    .then(()=>{
        console.log("mongo is connected");
        app.listen(process.env.port, ()=>{
            console.log("server is running");
        })
    })
    .catch(()=>{
        console.log("connect fail");
    })