const router = require('express').Router();

const db = require('../data/db-config')

router.get('/', async (req, res) => {
    
    try {
        const allCars = await db('cars');
        res.status(201).json(allCars);    
    } catch ({message}) {
        res.status(500).json(message);
    }
})

router.post('/', async (req, res) => {
    const {make, model, year, milage, vin} = req.body;

    if(!make) {
        res.status(400).json({errorMessage: 'please provide the make of the vehicle'});
    }
    if(!model) {
        res.status(400).json({errorMessage: 'please provide the model of the vehicle'});
    }
    if(!year) {
        res.status(400).json({errorMessage: 'please provide the year of the vehicle'});
    }
    if(!milage) {
        res.status(400).json({errorMessage: 'please provide the milage of the vehicle'});
    }
    if(!vin) {
        res.status(400).json({errorMessage: 'please provide the vin of the vehicle'});
    }
    
    try {
        const newCar = await db('cars').insert(req.body);
        res.status(200).json(newCar);
    } catch ({message}) {
        res.status(500).json(message);
    }
})


module.exports = router;