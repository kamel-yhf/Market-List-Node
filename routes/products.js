const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();
const uri = 'mongodb+srv://Kamel:679344856@cluster0-boqd6.mongodb.net/marketdb?retryWrites=true&w=majority';

//getList
router.get('/', async (req, res) => {
    const products = await loadProducts();
    res.status(200).send(await products.find({}).toArray());
});

//addList
router.post('/', async (req, res) => {
    const products = await loadProducts();
    await products.insertOne({
        productName: req.body.productName,
        priceProduct: req.body.priceProduct
    });
    res.send();
});

//deleteList
router.delete('/:id', async (req, res) => {
    const products = await loadProducts();
    products.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send({});
});

async function loadProducts(){
    const client = await mongodb.MongoClient.connect(
        uri,{useNewUrlParser: true});
    return client.db('marketdb').collection('products');
}

module.exports = router;