const express = require('express');

const router = express.Router();

const publisherHandler = require('./publisher.handler');

router.get("/", (req, res) => {
    res.json(publisherHandler.searchPublishers())
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.json(publisherHandler.searchPublisher(id))
})

router.post("/", (req, res) => {
    const data = req.body;
    res.json(publisherHandler.createPublisher(data));
})

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body;
    res.json(publisherHandler.editPublisher(data, id))
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    res.json(publisherHandler.deletePublisher(id));
})

module.exports = router;