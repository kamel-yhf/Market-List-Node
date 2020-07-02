const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();
const uri = 'mongodb+srv://Kamel:679344856@cluster0-boqd6.mongodb.net/marketdb?retryWrites=true&w=majority';

//getList
router.get('/', async (req, res) => {
    const users = await loadUsers();
    res.status(200).send(await users.find({}).toArray());
});

//addList
router.post('/', async (req, res) => {
    const users = await loadUsers();
    await users.insertOne({
        userName: req.body.userName,
        age: req.body.age,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    });
    res.send();
});

//deleteList
router.delete('/:id', async (req, res) => {
    const users = await loadUsers();
    users.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send({});
});

//connection
async function loadUsers(){
    const client = await mongodb.MongoClient.connect(
        uri,{useNewUrlParser: true});
    return client.db('marketdb').collection('users');
}

module.exports = router;