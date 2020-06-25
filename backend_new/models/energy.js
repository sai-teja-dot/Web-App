const mongoose = require('mongoose')

const Schema = mongoose.Schema

const energySchema = new Schema({
    Date: { type: String, required: true },
    Hour: { type: Number, required: true },
    Minute: { type: Number, required: true },
    Energy1: { type: Number, required: true },
    Energy2: { type: Number, required: true },
    Energy3: { type: Number, required: true },
    Water_Level1: { type: Number, required: true },
    Water_Level2: { type: Number, required: true },
    Water_Level3: { type: Number, required: true },
    plantId: { type: String, required: true }
})

module.exports = mongoose.model('Data', energySchema)
// id is automatically generated