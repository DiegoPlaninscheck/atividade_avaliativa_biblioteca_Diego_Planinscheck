const express = require('express');

const router = express.Router();

const books = require('./api/books/book.controller');
const clients = require('./api/clients/client.controller');
const authors = require('./api/authors/authors.controller');
const publishers = require('./api/publishers/publisher.controller');
const authorsBook = require('./api/authorsBook/authorsBook.controller');
const reservations = require('./api/reservations/reservation.controller');

router.use("/books", books);
router.use("/clients", clients);
router.use("/authors", authors);
router.use("/publishers", publishers); 
router.use("/authorsBook", authorsBook); 
router.use("/reservations", reservations); 

module.exports = router ;