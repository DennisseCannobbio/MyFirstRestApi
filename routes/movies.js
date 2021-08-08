const express = require('express')
const router = express.Router()
const _ = require('underscore')

// Import "Database"
const movies = require('../sample.json')

//All movies route get
router.get('/', (req, res) => {
    res.json(movies)
})

// All movies route post
router.post('/', (req, res) => {
    // Mostramos por consola los datos que estamos recibiendo desde postman
    console.log(req.body)
    // Guardamos en const los datos que estamos recibiendo desde postman
    const { title, director, year, rating } = req.body
    // Comprobamos los datos
    if (title && director && year && rating) {
        // Creamos el id para las peliculas
        const id = movies.length + 1
        // Si todo está comprobado entonces creamos una pelicula
        const newMovie = {...req.body, id}
        // Guardamos la pelicula en el arreglo de peliculas
        movies.push(newMovie)
        // Le enviamos las peliculas actualizadas
        res.json(movies)
    } else {
        res.send('Wrong Request')
    }
})

// Update movie route
router.put('/:id', (req, res) => {
    // Traemos desde req.params el id
    const { id } = req.params
    // Traemos desde req.body los parametros que utilizaremos para actualizar
    const { title, director, year, rating } = req.body
    if(title && director && year && rating) {
        // Desde underscore va a recorrer el arreglo de peliculas
        _.each(movies, (movie, i) => {
            // Si el id de la pelicula es igual al id que traemos del parametro entonces encontró la pelicula y la actualizamos
            if(movie.id == id) {
                movie.title = title
                movie.director = director
                movie.year = year
                movie.rating = rating
            }
        })
        // Enviamos una respuesta json con las peliculas actuializadas
        res.json(movies)
    } else {
        res.send('Wrong Request')
    }
})

// Delete movie route
router.delete('/:id', (req, res) => {
    // Traemos desde req.params el id
    const { id } = req.params
    // Desde underscore va a recorrer el arreglo de peliculas
    _.each(movies, (movie, i) => {
        // Si el id de la pelicula es igual al id que estoy recibiendo entonces elimino la pelicula
        if(movie.id == id) {
            movies.splice(i, 1)
        }
    })
    // Cuando se elimina la pelicula enviamos el arreglo actualizado
    res.send(movies)
})

module.exports = router