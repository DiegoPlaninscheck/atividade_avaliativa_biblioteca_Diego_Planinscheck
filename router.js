const express = require('express');

const router = express.Router();

const books = require('./api/books/book.controller');

router.use("/books", books);

module.exports = router ;