// Test 01 Hello World
// var express = require('express');
// var app = express();

// //app.get(route, callback)
// app.get('/', function(req, res){
//    res.send("Hello world!");
// });

// app.get('/hello', function(req,res){
//     res.send("Route for '/hello'");
// })

// /*
// app.listen(port,[host],[backlog],[callback])
// Host = Name of domain
// Backlog = The max number of queued pending connections. (511)
// Callback = An asynchronous function that is called when the server starts listening for requests.
// */
// app.listen(3000);

// Test 02 Routing
// var express = require('Express');
// var app = express();

// var things = require('./things.js');

// //both index.js and things.js should be in same directory
// app.use('/things', things);

// app.listen(3000);


// Test 03 URL Building
// var express = require('express');
// var app = express();

// /*
// Route param = /:[var]
// Variable param = req.params.[var]

// Filtering on URL param
// /:id([A-Z]{2})
// [a-z] This is for only alphabet
// {2} This is for character length
// */

// app.get('/number/:number([A-Z]{2})', function(req, res){
//    res.send('The name you specified is ' + req.params.number);
// });
// app.listen(3000);

// Test 04 Arrow Function

var express = require('express');
var app = express();

app.get("/", (req,res) => {
    res.send("home");
});

var PORT = process.env.PORT || 3000;
app.listen(PORT);

