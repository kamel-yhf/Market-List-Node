const express = require('express');
const priceController = require('../controllers/Prices');

const router = express.Router();

router.post('/', priceController.createPrices);
router.get('/', priceController.getPrices);
router.get('/:id', priceController.getPriceById);
router.put('/:id', priceController.updatePrice);
router.delete('/:id', priceController.deletePrice);

module.exports = router;