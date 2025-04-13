const express = require('express');
const Charger = require('../models/charger');
const router = express.Router();

// Get all chargers
router.get('/', async (req, res) => {
    try {
        const chargers = await Charger.find();
        res.json(chargers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a charger
router.post('/', async (req, res) => {
    const charger = new Charger(req.body);
    try {
        const newCharger = await charger.save();
        res.status(201).json(newCharger);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a charger
router.delete('/:id', async (req, res) => {
    try {
        await Charger.findByIdAndDelete(req.params.id);
        res.json({ message: 'Charger deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
