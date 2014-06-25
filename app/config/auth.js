// expose our config directly to our application using module.exports

var facebook = process.env.FACEBOOKKEY;
var fbSecret = process.env.FBSECRET;
var twitter = process.env.TWITTERKEY;
var twitterSecret = process.env.TWITTERSECRET;

module.exports = {

	'facebookAuth' : {
		'clientID' 		: facebook, // your App ID
		'clientSecret' 	: fbSecret, // your App Secret
		'callbackURL' 	: 'http://pollitic.kristiankanya.com/auth/facebook/callback'
		// 'callbackURL' 	: 'http://localhost:4000/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: twitter,
		'consumerSecret' 	: twitterSecret,
		'callbackURL' 		: 'http://pollitic.kristiankanya.com/auth/twitter/callback'
		// 'callbackURL' 		: 'http://localhost:4000/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: 'your-secret-clientID-here',
		'clientSecret' 	: 'your-client-secret-here',
		'callbackURL' 	: 'http://localhost:4000/auth/google/callback'
	}

};
