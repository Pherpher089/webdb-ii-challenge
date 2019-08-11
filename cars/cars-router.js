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


module.exports = router;