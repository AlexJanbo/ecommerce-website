const express = require('express');
const router = express.Router();
const { signup } = require('../services/authService');

router.post('/signup', signup);