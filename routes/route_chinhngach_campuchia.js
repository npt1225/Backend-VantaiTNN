const express = require('express');
const router = express.Router();
const { getContactData, UpdateData } = require('../controllers/chinhngach_campuchia_controller');

// Định nghĩa route GET /contact
router.get('/getCNCampuchia', getContactData);
router.put('/updateData', UpdateData);

module.exports = router;