const express = require('express');
const router = express.Router();

// Import the controller function
const { handleContribution } = require('../controllers/contributeController');

// Attach the POST route
router.post('/', handleContribution);

module.exports = router;
