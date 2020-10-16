const comments = require('../data/comments');

const list = (req, res) => {
    res.json(comments)

}

const show = (req, res) => {
    res.json(comments.find(comment => comment._id == req.params));
}
const create = (req, res) => {
    let payload = req.body;
    payload._id = 1;

    comments.map(comment => {
        comment._id = comment._id + 1;
    })
    comments.push(payload);
    res.json(comments);

}

module.exports = {list, show, create}