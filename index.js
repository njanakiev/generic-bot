console.log("Start Bot");

var Twit = require('twit');
var client = new Twit(require('./config'));

var fs = require('fs');
var exec = require('child_process').exec;
folder = require('path').dirname(require.main.filename);
blender = false;

upload();
setInterval(upload, 10000);

function upload() {
	if(blender){
		command = "blender -b -P blender_spheres.py";
		cwd = 'blender_example/';
		caption = "Some flying spheres";
	}else{
		command = "processing-java --sketch="+folder+"/processing_example --run";
		cwd = 'processing_example/';
		caption = "Some fancy barchart";
	}
	
	pRun = exec(command, {cwd: cwd}, function(){
		console.log('Image created');
			
		var b64content = fs.readFileSync(cwd+"output.png", {encoding: 'base64'});
			
		client.post('media/upload', { media_data: b64content }, function (err, data, response) {
			var mediaIdStr = data.media_id_string
			var altText = "Image";
			var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
			client.post('media/metadata/create', meta_params, function (err, data, response) {
				if (!err) {
					// now we can reference the media and post a tweet (media will attach to the tweet)
					client.post('statuses/update', 
						{ status: caption, media_ids: [mediaIdStr] }, 
						function (err, data, response) {
							console.log("Tweeted with id : " + data.id);
						}
					);
				} else {
					console.log(err);
				}
			});
		});	
	}).stdout.pipe(process.stdout);
}

