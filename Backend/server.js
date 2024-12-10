const express = require('express');
const connectDB = require('./Config/dbconn');
const app = express();
const diseaseRoutes = require('./Routes/DiseaseRoutes');
const bloodReportRoutes = require('./Routes/BloodReportRoutes');
const userRoutes = require('./Routes/UserRoutes');
const preventionRoutes = require('./Routes/PreventionRoutes');

app.use(express.json());
connectDB();
app.get('/', (req, res) => {
    console.log("Hello World");
    res.send('Get request through express');
})

app.get('/ping', (req, res) => {
    res.send("This is a ping endpoint");
})

app.use('/api/diseases', diseaseRoutes);
app.use('/api/reports', bloodReportRoutes);
app.use('/api/users', userRoutes);
app.use('/api/preventions', preventionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server running on post 5000");
})