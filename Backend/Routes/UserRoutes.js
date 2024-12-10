const express = require('express');
const UserRoute = express.Router();
const User = require('../Models/UserSchema');
const BloodReport = require('../Models/BloodReportSchema');


// POST route to create a new user
UserRoute.post('/create', async (req, res) => {
    try{
        const {name, email, password} = req.body;

        // check if a user with the same email already exists
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({error: 'Email already exists'});
        }

        // create a new user
        const newUser = new User({
            name, 
            email,
            password
        });

        await newUser.save();
        res.status(201).json({msg: 'User created successfully', user: newUser});
    }catch(err){
        res.status(500).json({error: 'Failed to create user', details: err.message})
    }
})

// get all reports for a specific user
UserRoute.get('/read', async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json({msg: "Users fetched successfully", users});
    }catch(err){
        res.status(500).json({error: 'Failed to fetch users', details: err.message})
    }
})

// Fetch health analysis summary for a user
UserRoute.get('/users/:id/analysis-summary', async (req, res) => {
    try {
        const reports = await BloodReport.find({userId: req.params.id});
        const diseaseCount = reports.reduce((acc, report) => {
            report.results.forEach(disease => {
                acc[disease] = (acc[disease] || 0) + 1;
            });
            return acc;
        }, {});

        const mostCommonDiseases = Object.keys(diseaseCount).sort((a, b) => diseaseCount[b] - diseaseCount[a]);
        res.status(200).json({
            userId: req.params.id,
            totalReports: reports.length,
            mostCommonDiseases,
        });
    }catch(err) {
        res.status(500).json({error: 'Failed to fetch user summary'});
    }
});

module.exports = UserRoute;