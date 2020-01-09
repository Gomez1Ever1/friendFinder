var path = require("path");
module.exports = function (app) {
    app.get("../data/friends.js", function (req, res) {
        res.sendFile(path.join(__dirname, "../data/friends.js"));
    });
    app.post("/survey.html", function (req, res) {
        console.log(req.body)
    })
};