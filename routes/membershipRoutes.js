const express = require('express');
const router = express.Router();
const { handleMembership } = require('../controllers/membershipController');

router.post('/', handleMembership);

module.exports = router;
