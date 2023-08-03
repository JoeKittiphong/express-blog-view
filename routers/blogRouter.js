const blogRouter = require("express").Router()
const blogController = require("../controllers/blogController")

blogRouter.post("/", blogController.create)
blogRouter.get("/", blogController.read)
blogRouter.put("/view", blogController.updateView)
blogRouter.put("/share", blogController.updateShare)

module.exports = blogRouter