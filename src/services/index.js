const router = require("express").Router();
const articlesRouter = require("./articles")
const authorsRouter = require("./authors")
const categoriesRouter = require("./categories")
router.use("/articles",articlesRouter)

module.exports = router