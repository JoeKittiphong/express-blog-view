const blogModel = require("../models/blogModel")

exports.create = async(req, res)=>{
    try {
        await blogModel.create({blog : req.query.blog , view : 0, share : 0})
        return res.send("blog view created")
    } catch (error) {
        return res.send(error)
    }
}

exports.read = async(req, res)=>{
    try {
        const data = await blogModel.find({blog : req.query.blog})
        if(!await data[0]){
            await blogModel.create({blog : req.query.blog, view : 0, share : 0})
            console.log("new blog created");
        }
        return res.send(data[0])
    } catch (error) {
        return res.send(error)
    }
}

exports.updateView = async(req, res)=>{
    try {
        const data = await blogModel.find({blog : req.query.blog})
        if(!await data[0]){
            await blogModel.create({blog : req.query.blog, view : 0, share : 0})
            console.log("new blog created");
        }
        const {_id, blog, view, share} = data[0]
        const newView = view + 1
        await blogModel.findByIdAndUpdate({_id : _id}, {blog : blog, view : newView, share : share})
        return res.send("view updated")
    } catch (error) {
        return res.send(error)
    }
}

exports.updateShare = async(req, res)=>{
    try {
        const data = await blogModel.find({blog : req.query.blog})
        if(!await data[0]){
            await blogModel.create({blog : req.query.blog, view : 0, share : 0})
            console.log("new blog created");
        }
        const {_id, blog, view, share} = data[0]
        const newShare = share + 1
        await blogModel.findByIdAndUpdate({_id : _id}, {blog : blog, view : view, share : newShare})
        return res.send("view updated")
    } catch (error) {
        return res.send(error)
    }
}