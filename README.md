# generic-bot

Generative bot implementation with [node.js](https://nodejs.org/), [Processing](https://processing.org/) and [Blender](https://www.blender.org/) presented at the [Barcamp Salzburg](https://barcamp-sbg.at/) ([Slides](https://njanakiev.github.io/generic-bot/)).

The bot is implemented for Twitter with the following API client for node

```
npm install twit --save
```

[hello.js](hello.js) implements a simple text status update on Twitter

[index.js](index.js) implements the generative bot which posts generative pictures in an interval of 10 seconds. 
To switch between Blender upload or Processing upload, change the `blender` variable inside [index.js](index.js).
To run the examples, a config.js file is needed for OAuth authentication which has the form
```javascript
module.exports = {
	consumer_key:         '...'  
	consumer_secret:      '...'
	access_token:         '...'
	access_token_secret:  '...'
}
```
The keys can be obtained at [Twitter Developers](https://dev.twitter.com/), by creating a new app.

To run Blender from the command line with a Python script
```
blender -b -P blender_spheres.py
```

To run Processing from the command line
```
processing-java --sketch [FOLDER_PATH]/processing_example --run
```
Relative paths do not work in this case, therefore the absolute path to the Processing folder needs to be specified.

## Resources

- [Twitter Developers](https://dev.twitter.com/)
- [Twitter API](https://dev.twitter.com/overview/api)
- [twit](https://github.com/ttezel/twit)
- [Blender Python API Quickstart](https://www.blender.org/api/blender_python_api_2_78a_release/info_quickstart.html)

The bot can be also implemented in a similar way for Tumblr shown in the [Slides](https://njanakiev.github.io/generic-bot/)

- [Tumblr Developers](https://www.tumblr.com/developers)
- [Tumblr API](https://www.tumblr.com/docs/en/api/v2)
- [tumblr.js](https://github.com/tumblr/tumblr.js/)

---

![Blender Example](blender_example/output.png)
