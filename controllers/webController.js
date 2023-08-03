const webModel = require("../models/webModel")

exports.create =async(req, res) =>{
    try {
        await webModel.create({view : 0})
        return res.send("web view created")
    } catch (error) {
        return res.send(error)
    }
}

exports.read = async(req, res)=>{
    try {
        const view = await webModel.find()
        return res.json(view[0])
    } catch (error) {
        return res.send(error)
    }
}

exports.update = async(req, res)=>{
    const id = await webModel.find()
    try {
        if(!await id[0]){
            await webModel.create({view : 0})
            console.log("new webview created");
        }
        const {_id, view} = (await webModel.find({_id : id[0]["_id"]}))[0]
        const newView = view + 1
        await webModel.findByIdAndUpdate(_id, {view : newView})
        return res.send("view updated")
    } catch (error) {
        return res.send(error)
    }

}

