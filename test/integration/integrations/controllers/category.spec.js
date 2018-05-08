const repo = require('../../../mocks/repository');
const categoryHelper = require('../../utils/categoryHelper');
const categoryData = require('../../../data/categories');
const config = require('../../../data/test_config');

describe('controllers/category', () => {

	let helper;

	let categoryRepo;

	beforeEach(() => {
		categoryData.push({categoryName:"testing1", getAgents: ()=>(Promise.resolve('it is agent'))});
		categoryRepo = repo(categoryData);
		helper = categoryHelper({offices: categoryRepo}, config);
	});

	it('get all', async () => {
		expect.assertions(1);

		const categories = await helper.getCategorys();
	//	expect(categories).toEqual(JSON.parse(JSON.stringify(categoryData)));
        expect(categories).toEqual({});
	});

	it('get one', async () => {
		expect.assertions(1);
		const category = await helper.getCategorys();
		let categoryId = category.findIndex((category) => category.categoryName === 'AR');
		const categ = await helper.getCategory(categoryId);
		expect(categ).toEqual(category [categoryId]);
        expect(categ).toEqual({})
	});

	it('create category', async () => {
		// так впадлу, шоб вы знали
		expect.assertions(2);
		const data = {
            categoryName: 'FailCourse'
		};

		const category = await helper.createCategory(data);
		const categories = await helper.getCategorys();

		expect(data).toMatchObject(category);
		expect(categories).toContainEqual(
			expect.objectContaining(category)
		);
	});

	it('update category', async () => {
		expect.assertions(1);
		let category = await helper.getCategorys();
		const item = category.find((categ) =>categ.categoryName === 'AR');
		item.categoryName = 'Kokokok';
		await helper.updateCategory(item);
		category = await helper.getCategorys();
		expect(category).toContainEqual(
			expect.objectContaining(item)
		);
	});

	it('remove category', async () => {
		expect.assertions(1);

		let categories = await helper.getCategorys();
		const item = categories.find((categ) => categ.categoryName === 'VR');
		await helper.deleteCategory(item);
		categories = await helper.getCategorys();
		expect(categories).not.toContainEqual(
			expect.objectContaining(item)
		);
	});
});

