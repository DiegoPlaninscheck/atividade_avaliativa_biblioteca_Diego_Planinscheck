const express = require('express');

const router = express.Router();

const booksHandler = require('./book.handler');

router.get("/", (req, res) => {

})

module.exports = router;