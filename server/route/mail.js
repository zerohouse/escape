var fs = require('fs');
var mailInfo = JSON.parse(fs.readFileSync('./../.mailinfo.json', encoding = "utf8"));
var nodemailer = require('nodemailer');
var sesTransport = require('nodemailer-ses-transport');
var options = {
    accessKeyId: mailInfo.accessKeyId,
    secretAccessKey: mailInfo.secretAccessKey,
    rateLimit: 5
};

var transporter = nodemailer.createTransport(sesTransport(options));

module.exports = function (app) {
    app.get('/api/faq', function (req, res) {
        var mailOptions = {
            from: 'sixtyescape@naver.com', // sender address
            to: "sixtyescape@naver.com",
            subject: req.passed.body.substr(0, 15), // Subject line
            html: req.passed.body // html body
        };
        res.send({});
        transporter.sendMail(mailOptions, function (error, info) {
            console.log(error, info);
        });
    });
};