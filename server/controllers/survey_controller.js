const mongoose = require('mongoose');
const Survey = mongoose.model('Survey');
mongoose.Promise = global.Promise;


module.exports = {
    add: (req, res, next) => {
        let q = new Survey(req.body);
        q.save()
        .then(() => {
            res.json(true);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    },
    all: (req, res, next) => {
        Survey.find({})
        .then((survey) => { res.json(survey); })
        .catch((err) => { res.status(450).json(err); });
    },
    destroy: (req, res, next) => {
        let b = new Survey(req.body);
        Survey.remove(b)
        .then(() => { res.json(true); })
        .catch((err) => { res.status(504).json(err); })
    },
    one: (req, res, next) => {
        Survey.find({'_id': req.body})
        .then((survey) => { res.json(survey); })
        .catch((err) => { res.status(450).json(err); });
    },
}