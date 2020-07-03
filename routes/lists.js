const express = require('express');
const listController = require('../controllers/Lists');

const router = express.Router();

router.post('/', listController.createList);

module.exports = router;