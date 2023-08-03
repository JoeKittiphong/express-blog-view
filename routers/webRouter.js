const webRouter = require("express").Router()
const webController = require("../controllers/webController")

webRouter.post("/", webController.create)
webRouter.get("/", webController.read)
webRouter.put("/", webController.update)


module.exports = webRouter