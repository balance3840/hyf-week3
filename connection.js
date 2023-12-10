const knex = require('knex');
const database = knex({
    client: 'mysql',
    connection: {
        host: 'sql11.freemysqlhosting.net',
        port: 3306,
        user: 'sql11669167',
        password: 'LkQx1DfWUW',
        database: 'sql11669167'
    }
});

database.raw('SELECT VERSION()').then(data => {
    console.log("The database connection works!");
});
// Define knex database connection

module.exports = database;