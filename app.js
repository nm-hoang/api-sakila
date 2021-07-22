const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))
app.use(express.json())
const PORT = 3000;
app.get('/', function (req, res) {
    res.status(200).json({
        appName:'sakila-app',
        message: "hello"
    })
})
app.use('/api/actors', require('./routes/actor.route'))
app.use('/api/customers', require('./routes/customer.route'))
app.get('/err', function (req, res) {
    console.log("te")
    throw new Error('BROKEN') // Express will catch this on its own.
  })
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).json({
        error_message: 'Something broke!'
    })
})
app.listen(PORT, function () {
    console.log(`Backend is running at http://localhost:${PORT}`)
})
