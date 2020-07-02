const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();
const uri = 'mongodb+srv://Kamel:679344856@cluster0-boqd6.mongodb.net/marketdb?retryWrites=true&w=majority';

//getList
router.get('/', async (req, res) => {
    const markets = await loadmarkets();
    res.status(200).send(await markets.find({}).toArray());
});

//addList
router.post('/', async (req, res) => {
    const markets = await loadmarkets();
    await markets.insertOne({
        marketName: req.body.marketName,
        address: req.body.address
    });
    res.send();
});

//deleteList
router.delete('/:id', async (req, res) => {
    const markets = await loadmarkets();
    markets.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send({});
});

async function loadmarkets(){
    const client = await mongodb.MongoClient.connect(
        uri,{useNewUrlParser: true});
    return client.db('marketdb').collection('markets');
}

module.exports = router;