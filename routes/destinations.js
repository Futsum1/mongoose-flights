const express = require('express');
const router = express.Router();

const destinationCtrl = require('../controllers/destination')

router.post('/flights/:id/destinations', destinationCtrl.create)

module.exports = router;