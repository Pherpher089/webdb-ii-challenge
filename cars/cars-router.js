const router = require('express').Router();

const db = require('../data/db-config')

router.get('/', (req, res) => {
    res.status(200).json({messae: 'Hello from your cars db router!'})
})

module.exports = router;