const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 4000;


const app = express();

connectDB()

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})

