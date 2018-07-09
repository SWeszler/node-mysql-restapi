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
                message: error
            })
        });
});

router.get('/:idCar',(req, res, next)=>{
    carModel.get(req.params.idCar)
        .then(result => {
            res.status(200).json({
                message: result
            })
        }).catch(error => {
            res.status(200).json({
                message: error
            })
        });
});

router.delete('/:idCar',(req, res, next)=>{
    carModel.delete(req.params.idCar)
        .then(result => {
            res.status(200).json({
                message: result
            })
        }).catch(error => {
            res.status(200).json({
                message: error
            })
        });
});

router.patch('/:idCar',(req, res, next)=>{

    const carObj = {
        id_car: req.params.idCar,
        brand: req.body.brand,
        model: req.body.model,
        engine: req.body.engine
    };

    carModel.update(carObj)
        .then(result => {
            res.status(200).json({
                message: result
            })
        }).catch(error => {
            res.status(200).json({
                message: error
            })
        });
});

router.post('/',(req, res, next)=>{

    const carObj = {
        brand: req.body.brand,
        model: req.body.model,
        engine: req.body.engine
    };

    carModel.add(carObj)
        .then(result => {
            res.status(201).json({
                message: result
            })
        }).catch(error => {
            res.status(200).json({
                message: error
            })
        });
});

export default router;