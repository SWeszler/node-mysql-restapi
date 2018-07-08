import express from 'express';
import carModel from '../model/car';

const router = express.Router();

router.get('/',(req, res, next)=>{

    carModel.getAll()
        .then(result => {
            res.status(200).json({
                message: result
            })
        }).catch(error => {
            res.status(200).json({
                message: 'error'
            })
        });

});

export default router;