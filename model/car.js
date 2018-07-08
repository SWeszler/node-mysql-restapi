import {connection} from '../database';

export default class carModel {
    static async getAll(){

        //SIMPLE METHOD WITH util.promisify
        //const result = await connection.query('SELECT * FROM cars');
        //return result;

        return new Promise((resolve, reject) => {

            connection.query('SELECT * FROM cars', (err, rows)=>{
                if(err)
                    reject(err)
                resolve(rows);
            });
   
        });
    }
}
