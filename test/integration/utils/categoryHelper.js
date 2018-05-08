const app = require('../AppManager');
const request = require('supertest');

module.exports = (db, config) => {

	const server = app(db, config);
	const testInstance = request(server);

	return {
		getCategorys: (options) => testInstance
			.get(`/category${options ? `?${options}` : ''}`)
			.expect(500)
			.then((res) => res.body)
		,
		getCategory: (id) =>
			testInstance
				.get(`/category/${id}`)
				.expect(500)
				.then((res) => res.body)
		,
		createCategory: (category) =>
			testInstance
				.post('/category/create')
				.send(category)
				.expect(500)
				.then((res) => res.body)
		,
		updateCategory: (category) =>
			testInstance
				.post(`/category/update`)
				.send(category)
				.expect(500)
				.then((res) => res.body)
		,
		deleteCategory: (category) =>
			testInstance
				.post(`/category/delete`)
				.send(category)
				.expect(500)
				.then((res) => res.body)

	}
};
