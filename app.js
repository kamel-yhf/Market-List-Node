const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const listRoutes = require('./routes/Lists');

const app = express();

// Connexion a la base de donnée MongoDB
mongoose.connect('mongodb+srv://Kamel:679344856@cluster0-boqd6.mongodb.net/marketdb?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connexion à mongo réussie'))
.catch(err => {console.log(err);
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(cors());

app.use('/lists', listRoutes)

// Export de l'application
module.exports = app;
