const express = require('express');
const router = express.Router();
const { getContactData } = require('../controllers/chinhngach_campuchia_controller');

// Định nghĩa route GET /contact
router.get('/getCNCampuchia', getContactData);

module.exports = router;