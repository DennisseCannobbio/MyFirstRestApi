const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')


//
router.get('/', async (req, res) => {
    // Hace una peticion con fetch a la url indicada
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // Lo convertimos a json
    const users = await response.json()
    // Le enviamos todos los usuarios desde el otro servicio
    res.json(users)
})


module.exports = router