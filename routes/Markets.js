const express = require('express');
const marketController = require('../controllers/Markets');

const router = express.Router();

router.post('/', marketController.createMarket);
router.get('/', marketController.getMarkets);
router.get('/:id', marketController.getMarketById);
router.put('/:id', marketController.updateMarket);
router.delete('/:id', marketController.deleteMarket);

module.exports = router;