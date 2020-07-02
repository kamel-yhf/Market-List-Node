const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();
const uri = 'mongodb+srv://Kamel:679344856@cluster0-boqd6.mongodb.net/marketdb?retryWrites=true&w=majority';

//getList
router.get('/', async (req, res) => {
    const lists = await loadLists();
    res.status(200).send(await lists.find({}).toArray());
});

//addList
router.post('/', async (req, res) => {
    const lists = await loadLists();
    await lists.insertOne({
        produit: req.body.produit,
        createAt: new Date()
    });
    res.send();
});

//deleteList
router.delete('/:id', async (req, res) => {
    const lists = await loadLists();
    lists.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send({});
});

//connection
async function loadLists(){
    const client = await mongodb.MongoClient.connect(
        uri,{useNewUrlParser: true});
    return client.db('marketdb').collection('lists');
}

module.exports = router;