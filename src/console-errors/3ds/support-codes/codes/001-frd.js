const SupportCode = require('../../../common/support-code');

module.exports = {
	'0102': new SupportCode('Missing name', 'Likely a Pretendo server issue', 'Missing message.', 'Try double checking your internet connection or wait.', 'https://en-americas-support.nintendo.com/app/answers/detail/a_id/17043/~/error-code%3A-001-0102#:~:text=This%20error%20code%20indicates%20you,a%20poor%20wireless%20network%20environment.'),
	'0112': new SupportCode('Missing name', 'Connection timeout', 'Unable to connect to the server.\nPlease try again later', 'Verify your wifi is working. If it is\nworking, then this is a serverside error.\nPlease wait and try again later.', 'https://en-americas-support.nintendo.com/app/answers/detail/a_id/14458/~/error-code%3A-001-0112'),
	'0302': new SupportCode('Missing name', 'Missing description', 'Unable to connect to the server.\nPlease try again later.\n\nFor help, visit support.nintendo.com', 'Missing fix', 'Missing link'),
	'0718': new SupportCode('Missing name', 'Full friends list', 'Your friend list is full.\n\nYou cannot add any\nadditional friends', 'Missing fix', 'Missing link'),
	'0720': new SupportCode('Missing name', 'Missing description', 'An error has occurred.\nTurn off the power and try again.\n\nFor help, visit support.nintendo.com', 'Missing fix', 'Missing link'),
	'0721': new SupportCode('Missing name', 'Online not allowed', 'Online Interaction is restricted by\nParental Controls', 'Reset your parental controls or visit here:\nhttps://en-americas-support.nintendo.com/app/answers/detail/a_id/270/~/how-to-reset-parental-controls', 'https://www.nintendo.com.au/support/articles/001-0721'),
	'0724': new SupportCode('Missing name', 'Mii not created', 'You have not yet created\na Personal Mii.\n\nCreate a Personal Mii\nusing Mii Maker', 'Open Mii Maker and follow the instructions\nthe console gives you.', 'Missing link'),
	'0725': new SupportCode('Missing name', 'Operation not allowed', 'Friend Registration is restricted by\nParental Controls', 'Reset your parental controls or visit here:\nhttps://en-americas-support.nintendo.com/app/answers/detail/a_id/270/~/how-to-reset-parental-controls', 'Missing link'),
	'0726': new SupportCode('Missing name', 'Friend list not configured', 'You have not yet configured your\nnotification settings for friends.\n\nConfigure these settings in the\nfriend list', 'Go to orange friend icon on the home screen\nand follow the instructions the console gives you.', 'Missing link'),
	'0803': new SupportCode('Missing name', 'Likely maintenance or servers are down.', 'Missing message', 'Serverside error. Please wait and try again later.', 'Missing link'),
	'0811': new SupportCode('Missing name', 'Server maintenance', 'The server is currently undergoing\nmaintenance. We apologize for any\ninconvenience. Please try again later.\n\nTo learn more about maintenance,\nvisit support.nintendo.com', 'Serverside maintenance. Please wait and try again later.', 'Missing link'),
};
