const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const energyRoutes = require('./routes/energy-routes')

const app = express()
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
    next()
})

app.use('/api/energy', energyRoutes)

app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
});

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500)
    res.json({ message: error.message || 'An unknown error occurred!' });
});
console.log(Date.now())
mongoose.connect('mongodb+srv://yash:yash1234@fg-0fac7.azure.mongodb.net/energy?retryWrites=true&w=majority').then(() => {
    app.listen(5000)
    console.log('database connected')
}).catch(err => {
    console.log(err)
})