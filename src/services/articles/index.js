const router = require("express").Router();

const Model = require("../../utils/model")

const Articles = new Model('articles')

const db = require("../../utils/db");

router.get("/", async (req, res, next) => {
    try {
        const response  = await Articles.findOne();
        res.send(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
})

router.get("/id", async (req, res, next) => {
    try {
        const { rows } = await articles.findById(req.params.id)
        res.send(rows)
    }
    catch (err) {
        console.log(err)
        throw new Error
    }
})

router.post("/", async (req, res, next) => {
    try {
        const response = await Articles.save(req.body)
        res.send(response)
    }
    catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
})

router.put("/id", async (req, res, next) => {
    try {
        const response = await Articles.findByIdAndUpdate(req.params.id,req.body)
        res.send(response);
    }
    catch (err) {
        console.log(e);
        res.status(500).send(e);
    }
})

router.delete("/id", async (req, res, next) => {
    try {
        const { rows } = await Articles.findByIdAndDelete(req.params.id);
        res.send(rows);
    }
    catch (err) {
        console.log(e);
        res.status(500).send(e);
    }
})

module.exports = router;