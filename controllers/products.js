const products = require('../data/products');

const list = (req, res) => {
    res.json(products)

}

const show = (req, res) => {
    res.json(products.find(product => product._id == req.params));
}
const create = (req, res) => {
    let payload = req.body;
    payload._id = 1;

    products.map(product => {
        product._id = product._id + 1;
    })
    products.push(payload);
    res.json(products);

}

module.exports = {list, show, create}