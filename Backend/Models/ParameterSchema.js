const mongoose = require('mongoose');

const ParameterSchema = new mongoose.Schema({
    parameter: {
        type: String,
        required: true
    },
    normalRange: {
        type: String,
        required: true
    },
    significance: {
        type: String,
        required: true
    }
});

const ParameterModel = mongoose.model('Parameter', ParameterSchema);
module.exports = ParameterModel;