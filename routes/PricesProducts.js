const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();
const uri = 'mongodb+srv://Kamel:679344856@cluster0-boqd6.mongodb.net/marketdb?retryWrites=true&w=majority';

//getList
router.get('/', async (req, res) => {
    const pricesProducts = await loadpricesProducts();
    res.status(200).send(await pricesProducts.find({}).toArray());
});

//addList
router.post('/', async (req, res) => {
    const pricesProducts = await loadpricesProducts();
    await pricesProducts.insertOne({
        price: req.body.price,
    });
    res.send();
});

//deleteList
router.delete('/:id', async (req, res) => {
    const pricesProducts = await loadpricesProducts();
    pricesProducts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send({});
});

//connection
async function loadpricesProducts(){
    const client = await mongodb.MongoClient.connect(
        uri,{useNewUrlParser: true});
    return client.db('marketdb').collection('pricesProducts');
}

module.exports = router;