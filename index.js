const express = require("express");
const bodyParser = require("body-parser");
const app = express();

/* We got data */
const contacts = require('./routes/contacts.js');
const vehicles = require('./routes/vehicles.js');
const comments = require('./routes/comments.js');
const products = require('./routes/products.js');

app.use(express.static('public'));
app.use(bodyParser.json());

app.use(contacts);
app.use(vehicles);
app.use(comments);
app.use(products);

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
