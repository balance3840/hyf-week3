// Define database in connection.js
// Create contacts router


// Import express
const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const contactsRouter = require('./contactsRouter');
// Import contacts router

server.use(bodyParser.json());
server.use(contactsRouter);

server.listen(3000, () => {
    console.log("I'm listening on port 3000");
})