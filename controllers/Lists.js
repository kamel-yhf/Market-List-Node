const List = require('../models/Lists');

//Create lists
exports.createList = (req, res) => {
    const listBody = req.body;
    const list = new List({
        ...listBody
    });
    list.save().then(() => {
        res.status(201).json({
            message:"list enregistré"
        }).catch(error => {
            res.status(400).json(error);
        });
    });
}