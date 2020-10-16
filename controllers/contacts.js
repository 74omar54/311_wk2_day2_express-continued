const contacts = require('../data/contacts');

const list = (req, res) => {
    res.json(contacts)

}

const show = (req, res) => {
    res.json(contacts.find(contact => contact._id == req.params));
}
const create = (req, res) => {
    let payload = req.body;
    payload._id = 1;

    contacts.map(contact => {
        contact._id = contact._id + 1;
    })
    contacts.push(payload);
    res.json(contacts);

}

module.exports = {list, show, create}