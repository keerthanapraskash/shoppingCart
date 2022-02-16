const Item = require('../model/item.model')

exports.caculateTotal = (req, res) => {
    Item.calculateTotal(req.body, (err,data) => {
        res.send(data);
    });
}