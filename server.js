var express = require("express");
var path = require("path");
const apiRoutes = require("./app/routing/apiRoutes");
const htmlRoutes = require("./app/routing/htmlRoutes");
var app = express();
var PORT = process.env.PORT || 7000;
//sets up the express app to parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app"));
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
});
