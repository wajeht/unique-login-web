const Password = require('../models/Password.js');

exports.getDefaultPassword = (req, res) => {
	const password = new Password();

	res.status(200).json({
		password: password.getPassword(),
	});
};

exports.getDefaultPasswordByLength = (req, res) => {
	const { length } = req.params;
	const password = new Password({
		length: length,
	});

	res.status(200).json({
		password: password.getPassword(),
	});
};

exports.getPasswordByLengthAndOneParam = (req, res) => {
	const { length, one } = req.params;
	const password = new Password({
		length: length,
		[one]: true,
	});

	res.status(200).json({
		password: password.getPassword(),
	});
};

exports.getPasswordByLengthAndTwoParams = (req, res) => {
	const { length, one, two } = req.params;
	const password = new Password({
		length: length,
		[one]: true,
		[two]: true,
	});

	res.status(200).json({
		password: password.getPassword(),
	});
};

exports.getPasswordByLengthAndThreeParams = (req, res) => {
	const { length, one, two, three } = req.params;
	const password = new Password({
		length: length,
		[one]: true,
		[two]: true,
		[three]: true,
	});

	res.status(200).json({
		password: password.getPassword(),
	});
};

exports.getPasswordByLengthAndFourParams = (req, res) => {
	const { length, one, two, three, four } = req.params;
	const password = new Password({
		length: length,
		[one]: true,
		[two]: true,
		[three]: true,
		[four]: true,
	});

	res.status(200).json({
		password: password.getPassword(),
	});
};
