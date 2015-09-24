var db = require('./db.js');
var scheme = db.Schema({
    date: String,
    index: Number,
    info: Object,
    occupied: Boolean
});
var Reserve = db.model('reserve', scheme);


module.exports = function (app) {
    app.post('/api/reserve', function (req, res) {
        if (!req.passed)
            return;
        if (req.passed.date === undefined)
            return;
        if (req.passed.index === undefined)
            return;
        if (req.passed.info === undefined)
            return;
        var gDate = new Date(req.passed.date);
        var date = gDate.getFullYear() + "" + gDate.getMonth() + "" + gDate.getDate();
        Reserve.findOne({date: date, index: req.passed.index}, function (err, result) {
            if (result) {
                res.send({err: true});
                return;
            }
            Reserve.update({date: date, index: req.passed.index}, {
                info: req.passed.info,
                occupied: true
            }, {upsert: true}, function (err, result) {
                console.log(err, result);
                res.send({err: err, result: result});
            });
        });
    });

    app.get('/api/reserve', function (req, res) {
        if (!req.passed)
            return;
        if (req.passed.date === undefined)
            return;
        var gDate = new Date(req.passed.date);
        var date = gDate.getFullYear() + "" + gDate.getMonth() + "" + gDate.getDate();
        var query = Reserve.find({date: date});
        if (req.passed.password !== 'password')
            query = query.select("index");
        query.exec(function (err, result) {
            res.send({err: err, result: result});
        });
    });
};