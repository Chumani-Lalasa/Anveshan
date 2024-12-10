const mongoose = require('mongoose');

const DiseaseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    causes: {
        type: String
    },
    symptoms: [String],
    preventions: [String],
    precautions: [String],
});

const DiseaseModel = mongoose.model('Disease', DiseaseSchema);
module.exports = DiseaseModel;