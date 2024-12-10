const mongoose = require('mongoose');

const BloodReportSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    parameters: {
        hemoglobin: {
            type: Number,
            required: true
        },
        rbc: {
            type: Number,
            required: true
        },
        wbc: {
            type: Number,
            required: true
        },
    },
    results: [String], // List of diseases predicted
})

const BloodReportModel = mongoose.model('BloodReport', BloodReportSchema);
module.exports = BloodReportModel;