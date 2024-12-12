const express = require('express');
const BloodReportModel = require('../Models/BloodReportSchema');
const BloodReportRoute = express.Router();

BloodReportRoute.post('/create', async (req, res) => {
    try{
        const {userId, date, parameters, results} = req.body;

        // Create a new blood report
        const newReport = new BloodReportModel({
            userId,
            date,
            parameters,
            results
        });
        await newReport.save();
        res.status(201).json({msg: "Blood report created successfully", report: newReport});
    }catch(err){
        res.status(500).json({error: 'Failed to create blood report', details: err.message})
    }
})

BloodReportRoute.get('/read', async (req, res) => {
    try{
        const reports = await BloodReportModel.find(req.query.userId ? {userId: req.query.userId} : {});
        res.status(200).send({msg: "Data received", reports});
    }catch(err){
        res.status(500).json({error: 'Failed to fetch reports'});
    }
});

BloodReportRoute.get('/read/:id', async (req, res) => {
    try{
        const report = BloodReportModel.findById(req.params.id);
        if(!report){
            return res.status(400).json({error: 'Report not found'});
        }
        res.status(200).json(report);
    }catch(err){
        res.status(500).json({error: 'Failed to fetch report'});
    }
})

BloodReportRoute.put('/update/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const updateData = req.body;

        updateReport = await BloodReportModel.findByIdAndUpdate(
            id, 
            updateData,
            {new: true, runValidators: true} // Ensure the updated document is returned and validation is applied
        );
        if(!updateReport){
            return res.status(404).json({error: 'Blood report not found'});
        }
        res.status(200).json({msg: 'Blood report updated successfully', report: updateReport})
    }catch(err){
        res.status(500).json({error: 'Failed to update blood report', details: err.message});
    }
})

module.exports = BloodReportRoute;

