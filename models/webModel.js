const mongoose = require("mongoose")

const webSchema = mongoose.Schema({
    view : Number
})

const webModel = mongoose.model("webview", webSchema)
module.exports = webModel