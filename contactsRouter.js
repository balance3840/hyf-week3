const express = require('express');

const router = express.Router();
const database = require('./connection');


// EXERCISE
// Read a request param called page and show the results based on that page 

router.get('/contacts', (req, res) => {
    const { page, limit, order } = req.query;
    const offset = (page - 1) * limit;
    database('contacts')
    //.limit(limit)
    //.orderBy('first_name', order)
    //.offset(offset)
    .then(rows => {
        res.send(rows);
    });
});

router.put('/contacts', async (req, res) => {
    const { body } = req;
    await database('contacts').insert(body);
    res.send(body);
});

router.put('/users',async (req, res) => {
    const { body: { username, last_name, firstName: first_name, password } } = req;
    await database('users').insert({
        username,
        last_name,
        first_name,
        password
    });
    res.send("New user");
});

router.post('/user_contacts', async (req, res) => {
    const { body } = req;
    await database('user_contacts').insert(body);
    res.send("User contact created");
});

module.exports = router;