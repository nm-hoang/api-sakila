const express = require('express')
const morgan=require('morgan')
const app = express()

app.use(morgan('dev'))
app.use(express.json())
const PORT = 3000;

app.use('/api/actors', require('./routes/actor.route'))
app.use('/api/customers', require('./routes/customer.route'))

app.listen(PORT, function () {
console.log(`Backend is running at http://localhost:${PORT}`)
})





// const PORT = 3000;
// app.listen(PORT, function () {
//     console.log(`Backend is running at http://localhost:${PORT}`)
// })
