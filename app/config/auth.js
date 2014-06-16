// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '249911675200296', // your App ID
		'clientSecret' 	: 'dc940bfebf5ef4b17f8833bd3e54fa50', // your App Secret
		'callbackURL' 	: 'http://localhost:4000/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'sfnuo9STOBhvXFNl62Xaj0tUu',
		'consumerSecret' 	: 'e1bEISOUsEdQyxmAyrqJsuqVFBJeVYvbluWp8b3EZ96P00z1QZ',
		'callbackURL' 		: 'http://localhost:4000/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: 'your-secret-clientID-here',
		'clientSecret' 	: 'your-client-secret-here',
		'callbackURL' 	: 'http://localhost:4000/auth/google/callback'
	}

};
