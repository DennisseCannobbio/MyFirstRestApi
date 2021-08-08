const express = require('express')
const morgan = require('morgan')

// Initializations
const app = express()

// Settings
app.set('port', process.env.PORT || 5000)
app.set('json spaces', 2)

// Middlewares
app.use(morgan('dev'))
/*Este middleware permite entender los formatos json */ 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Global Variables

// Routes
app.use(require('./routes/index'))
app.use('/api/movies', require('./routes/movies'))
app.use('/api/users', require('./routes/users'))

// Static Files

// Run server
app.listen(app.get('port'), () => {
    console.log(`Servidor abierto en el puerto ${app.get('port')}`)
})