const express = require('express');
const DiseaseRoute = express.Router();
const DiseaseModel = require('../Models/DiseaseSchema');

DiseaseRoute.post('/create', async (req, res) => {
    try{
        const {name, description, causes, symptoms, preventions, precautions} = req.body;

        // Create new Disease document
        const newDisease = new DiseaseModel({
            name,
            description,
            causes,
            symptoms,
            preventions,
            precautions
        });

        await newDisease.save();
        res.status(201).json({msg: "Disease created successfully", disease: newDisease});
    }catch(err){
        console.error("Error inserting disease: ", err);
        res.status(500).json({error: "Failed to create disease"});        
    }
})

DiseaseRoute.get('/read', async (req, res) => {
    try{
        const diseases = await DiseaseModel.find().lean();
        console.log("Fetched details", diseases);
        res.status(200).json({msg: "Data received", diseases});
    }catch(err){
        res.status(500).json({error: 'Failed to fetch diseases'});
    }
})

DiseaseRoute.get('/diseases/:id', async (req, res) => {
    try{
        const disease = await DiseaseModel.findById(req.params.id);
        if(!disease){
            return res.status(404).json({error: 'Disease not found'});
        }
        res.status(200).json(disease);
    }catch(err){
        res.status(500).json({error: 'Failed to fetch disease'});
    }
});

DiseaseRoute.put('/update/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const updateData = req.body;

        // Find and update the disease
        const updatedDisease = await DiseaseModel.findByIdAndUpdate(
            id,
            updateData,
            {new: true, runValidators: true} // Ensure the updated document is returned and validation is applied
        );

        if(!updatedDisease){
            return res.status(404).json({error: 'Disease not found'})
        }
        res.status(200).json({msg: 'Disease updated successfully', disease: updatedDisease});
    }catch(err){
        res.status(500).json({error: 'Failed to update disease', details: err.message})
    }
})


module.exports = DiseaseRoute;