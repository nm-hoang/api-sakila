const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(express.json())

app.use(morgan('dev'))

app.get('/', function (req, res) {
    res.json({
        "message": "hello world"
    })
})

app.use('/api/actors', require('./routes/actor.route'))


const PORT = 3000;
app.listen(PORT, function () {
    console.log(`Backend is running at http://localhost:${PORT}`)
})
