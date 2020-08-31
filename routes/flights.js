var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights.js')

router.get('/', flightsCtrl.index);
/* GET users listing. */
router.get('/new', flightsCtrl.new); 
// Post flights
router.post('/', flightsCtrl.create);

router.get('/:id/', flightsCtrl.show);


module.exports = router;
