console.log("Start Bot");

var Twit = require('twit');
var client = new Twit(require('./config'));

client.post('statuses/update', { status: 'Test!' }, 
	function(err, data, response) {
		console.log(data)
	});