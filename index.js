const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const lists = require("./routes/lists");
app.use('/lists', lists);
const markets = require("./routes/markets");
app.use('/markets', markets);
const products = require("./routes/products");
app.use('/products', products);
const pricesProducts = require("./routes/pricesProducts");
app.use('/pricesProducts', pricesProducts);
const users = require("./routes/users");
app.use('/users', users);

const port = process.env.PORT || 5000;
app.listen(port, () => {console.log(`server OK ${port}`)});