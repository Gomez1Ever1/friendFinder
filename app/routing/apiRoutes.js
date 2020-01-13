var path = require("path");
var friends = require("../data/friends.js")
module.exports = function (app) {
    app.get("/data/friends", function (req, res) {
        res.JSON(friends);
    });
    app.post("/api/friend", function (req, res) {
        var diffArrays = [];
        friends.forEach(function (element) {
            var compareRes = [];
            for (let i = 0; i < req.body.scores.length; i++) {
                var result = Math.abs(parseInt(req.body.scores[i]) - parseInt(element.scores[i]));
                compareRes.push(result);
                var totalDifference = compareRes.reduce(function (accumulator, currentValue, currentIndex, array) {
                    return accumulator + currentValue;
                })
            }
            diffArrays.push(totalDifference);
        });
        var index = diffArrays.indexOf(Math.min(...diffArrays));
        friends.push(req.body)
        res.json(friends[index]);
    });
};
