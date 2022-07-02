const express = require('express');

const router = express.Router();

const books = require('./api/books/book.controller');
const client = require('./api/clients/client.controller');
const authors = require('./api/authors/authors.controller');
const publisher = require('./api/publishers/publisher.controller');
const authorsBook = require('./api/authorsBook/authorsBook.controller');
const reservation = require('./api/reservations/reservation.controller');

router.use("/books", books);
router.use("/clients", client);
router.use("/authors", authors);
router.use("/publishers", publisher); 
router.use("/authorsBook", authorsBook); 
router.use("/reservation", reservation); 

module.exports = router ;