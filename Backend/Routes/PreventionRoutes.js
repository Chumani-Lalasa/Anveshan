const express = require('express');
const Disease = require('../Models/DiseaseSchema');
const PreventionRoute = express.Router();

// Add or update preventions and precautions for a disease
PreventionRoute.post('/create', async (req, res) => {
    try{
        const {name, preventions, precautions} = req.body;

        if(!name || !Array.isArray(preventions) || !Array.isArray(precautions)){
            return res.status(400).json({error: "Invalid input data. 'name', 'preventions', and 'precautions' are required. "})
        }
        let disease = await Disease.findOne({name});
        if(disease){
            disease.preventions = preventions;
            disease.precautions = precautions;
            await disease.save();
            res.status(200).json({msg: 'Preventions and precautions updated successfully', disease});
        }else{
            disease = new Disease({
                name,
                preventions,
                precautions
            });
            await disease.save();
            res.status(201).json({msg: 'New disease added with preventins and precautions', disease});
        }
    }catch(err){
        res.status(500).json({error: 'Failed to add or update preventions and precautions'});
    }
})

// Fetch all preventions
PreventionRoute.get('/read', async (req, res) => {
    try {
        const diseases = await Disease.find({}, 'name preventions');
        const preventions = diseases.map(d => ({
            disease: d.name,
            prevention: d.preventions
        }));
        res.status(200).json(preventions);
    }catch(err){
        res.status(500).json({error: 'Failed to fetch preventions'});
    }
});

// Fetch prevention for a specific disease
PreventionRoute.get('/read/:disease', async (req, res) => {
    try{
        const disease = await Disease.findOne({
            name: req.params.disease
        });
        if(!disease){
            return res.status(404).json({error: 'Disease not found'});
        }
        res.status(200).json({
            disease: disease.name,
            preventions: disease.preventions,
            precautions: disease.precautions,
        });
    }catch(err){
        res.status(500).json({error: 'Failed to fetch prevention'});
    }
})

// Update preventions and precautions for a disease
PreventionRoute.put('/update/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const {preventions, precautions} = req.body;

        if(!Array.isArray(preventions) || !Array.isArray(precautions)){
            return res.status(400).json({error: "Invalid input data. 'preventions' and 'precautions' must be arrays."});
        }

        const updatedDisease = await Disease.findByIdAndUpdate(
            id,
            {preventions, precautions},
            {new: true, runValidators: true}
        );

        if(!updatedDisease){
            return res.status(404).json({error: 'Disease not found'});
        }
        res.status(200).json({msg: 'Preventions and precautions updated successfully', disease: updatedDisease})
    }catch(err){
        res.status(500).json({error: 'Failed to update preventions and precautions', details: err.message});
    }
})

module.exports = PreventionRoute;