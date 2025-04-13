const mongoose = require('mongoose');

const ChargerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
    type: { type: String, required: true },
    availability: { type: Boolean, default: true },
});

module.exports = mongoose.model('Charger', ChargerSchema);
