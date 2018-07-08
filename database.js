import mysql from 'mysql';
import util from 'util';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'restful_api'
});

//SIMPLE METHOD WITH util.promisify
//connection.query = util.promisify(connection.query);

export { connection };