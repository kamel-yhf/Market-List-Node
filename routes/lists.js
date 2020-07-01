const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//getList
router.get('/', (req, res) => {
    res.send("hello");
});
//addList

//deleteList

module.exports = router;