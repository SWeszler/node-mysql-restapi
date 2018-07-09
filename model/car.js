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

    static async get(idCar) {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM cars WHERE id_car= ${idCar}`, (err, rows)=>{
                if(err)
                    reject(err)
                resolve(rows);
            });
        });
    }

    static async delete(idCar) {
        return new Promise((resolve, reject) => {
            connection.query(`DELETE FROM cars WHERE id_car= ${idCar}`, (err, info)=>{
                if(err)
                    reject(err)
                resolve(info);
            });
        });
    }

    static async update(carObj) {
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE cars 
            SET brand="${carObj.brand}", 
            model="${carObj.model}", 
            engine="${carObj.engine}" 
            WHERE id_car= ${carObj.id_car}`, (err, info)=>{
                if(err)
                    reject(err)
                resolve(info);
            });
        });
    }

    static async add(carObj) {
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO cars 
            (brand,model,engine)
            VALUES ("${carObj.brand}", 
            "${carObj.model}", 
            "${carObj.engine}")`, (err, info)=>{
                if(err)
                    reject(err)
                resolve(info);
            });
        });
    }
}
