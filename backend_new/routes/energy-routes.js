const express = require('express')
const energyController = require('../controllers/energy-controller')
const router = express.Router();

router.get('/:pid', energyController.getEnergyByPlantId)

module.exports = router