const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    blog : String,
    view : Number,
    share : Number
})

const blogModel = mongoose.model("blogview", blogSchema)
module.exports = blogModel