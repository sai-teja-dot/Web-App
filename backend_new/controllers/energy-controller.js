const HttpError = require('../models/http-error');
//const Data = require('../models/energy')
let DUMMY_ENERGY = [
    {
        id: 'e1',
        energy: 25,
        time: 1586943145824,
        plantId: 'p1'
    },
    {
        id: 'e2',
        energy: 30,
        time: 1586943150000,
        plantId: 'p1'
    }
]
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
},
    { collection: 'data' })

const M = mongoose.model('Energy', energySchema)

const getEnergyByPlantId = async (req, res, next) => {
    const pid = req.params.pid;
    // const energy = DUMMY_ENERGY.filter(p => {
    //     return p.plantId === plantId;
    try {
        energy = await M.find().exec()
        console.log(energy)
    } catch (err) {
        console.log(err)
    }

    if (!energy || energy.length === 0) {
        return next(
            new HttpError('Could not find places for the provided user id.', 404)
        );
    }

    res.json({ energy: energy.map(ene => ene.toObject({ getters: true })) });
};

exports.getEnergyByPlantId = getEnergyByPlantId