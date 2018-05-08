const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const errors = require('../../helpers/errors.helper');
const {officeSchema: categorySchema} = require('../../schemas/index');
const OfficeService = require('../services/category');

module.exports = (db, config) => {
	const app = express();

	// Services
	const categoryService = new OfficeService(db.categories, categorySchema, errors);

	// Controllers
	const apiController = require('../controllers/category')(
			categoryService
	);

	// Mounting
	app.use(express.static('public'));
	app.use(cookieParser(config.cookie.key));
	app.use(bodyParser.json());

	app.use('/category', apiController);

	return app;
};
