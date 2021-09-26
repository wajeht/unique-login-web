const Username = require('../models/Username.js');

exports.getUsernameByDefault = (req, res) => {
	const username = new Username({
		adjectives: true,
		animals: true,
	});

	res.status(200).json({
		username: username.getUsername(),
	});
};

exports.getUsernameByOneParam = (req, res) => {
	const { one } = req.params;
	const username = new Username({
		[one]: true,
	});

	res.status(200).json({
		username: username.getUsername(),
	});
};

exports.getUsernameByTwoParam = (req, res) => {
	const { one, two } = req.params;
	const username = new Username({
		[one]: true,
		[two]: true,
	});

	res.status(200).json({
		username: username.getUsername(),
	});
};

exports.getUsernameByThreeParam = (req, res) => {
	const { one, two, three } = req.params;
	const username = new Username({
		[one]: true,
		[two]: true,
		[three]: true,
	});

	res.status(200).json({
		username: username.getUsername(),
	});
};

exports.getUsernameByFourParam = (req, res) => {
	const { one, two, three, four } = req.params;
	const username = new Username({
		[one]: true,
		[two]: true,
		[three]: true,
		[four]: true,
	});

	res.status(200).json({
		username: username.getUsername(),
	});
};
