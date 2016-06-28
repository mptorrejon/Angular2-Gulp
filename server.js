var clearbit = require('clearbit')('5677ecf5dc2ff38d1c1df319d3e6ae32');
var express = require('express');
var app = express();

// 'http://localhost:5000/search?name='+name
app.get('/search', function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	// res.send(req.query.name);
	clearbit.Discovery.search({query: {name: req.query.name } })
	.then(function (search) {
		res.json( search );
	})
	.catch(function (err) {
		console.error(err);
	});
});

app.listen(5000);