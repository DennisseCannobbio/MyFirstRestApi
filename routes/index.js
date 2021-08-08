const express = require('express')
const router = express.Router()

// Index page
router.get('/', (req, res) => {
    res.json({"Title": "Hello World"})
}) 

module.exports = router

