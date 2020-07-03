const express = require('express');
const listController = require('../controllers/Lists');

const router = express.Router();

router.post('/', listController.createList);
router.get('/', listController.getLists);
router.get('/:id', listController.getListById);
router.put('/:id', listController.updateList);
router.delete('/:id', listController.deleteList);

module.exports = router;