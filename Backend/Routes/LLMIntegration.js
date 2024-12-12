const express = require('express');
const BloodReport = require('../Models/BloodReportSchema');
const {GoogleGenerativeAI} = require('@google/generative-ai')

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_API_KEY);
const model = genAI.getGenerativeModel({model: 'gemini-1.5-flash'});

const LLMRoute = express.Router();

LLMRoute.post('/generate-insights', async (req, res) => {
    const {reportId} = req.body;

    try{
        // Fetch the blood report from the database
        const report = await BloodReport.findById(reportId);
        if(!report){
            return res.status(404).json({error: 'Report not found'});
        }

        // Create a prompt based on the blood report
        const prompt = `Analyze the following blood report and provide a detailed explanation and prevention measures:
                                  Hemoglobin: ${report.parameters.hemoglobin} g/dL
                                  RBC: ${report.parameters.rbc} millions/uL
                                  WBC: ${report.parameters.wbc} cells/uL
                                `;

        // use the Google Generative AI model to generate insights
        const response = await model.generateContent(prompt);
        const result = response["response"]["candidates"][0].content.parts;
        res.status(200).json({result});
    }catch(err){
        console.error('Error while generating insights: ', err.message || err);
        res.status(500).json({error: 'Failed to generate insights'});        
    }
})

module.exports = LLMRoute;