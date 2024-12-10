const express = require('express');
const ParameterModel = require('../Models/ParameterSchema');
const ParameterRoute = express.Router();

ParameterRoute.get('/paramters', async (req, res) => {
    try{
        const parameters = await Parameter.find();
        res.status(200).json(parameters);
    }catch(err){
        res.status(500).json({error: 'Failed to fetch parameters'});
    }
})

module.exports = ParameterRoute;