const express = require('express');

const router = express.Router();

const publisherHandler = require('./publisher.handler');

router.get("/", async (req, res) => {
    res.json(await publisherHandler.searchPublishers())
})

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await publisherHandler.searchPublisher(id))
})

router.post("/", async (req, res) => {
    const data = req.body;
    res.json(await publisherHandler.createPublisher(data));
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    res.json(await publisherHandler.editPublisher(data, id))
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await publisherHandler.deletePublisher(id));
})

module.exports = router;