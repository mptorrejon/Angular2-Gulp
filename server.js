var clearbit = require('clearbit')('5677ecf5dc2ff38d1c1df319d3e6ae32');
var express = require('express');
var app = express();

/*
	meanwhile, I get client to get API calls,
	This server will make API calls to clearbit API and transfer it to 
	client with response. 
*/
app.get('/search/', function(req, res, next){
	console.log(req.query.name);
	console.log('----');
	res.header('Access-Control-Allow-Origin', '*');
	// res.send(req.query.name);
	clearbit.Discovery.search({query: {name: req.query.name } })
	.then(function (search) {
		console.log(search);
		res.json( search );
	})
	.catch(function (err) {
		console.error(err);
	});
});

app.listen(5000);