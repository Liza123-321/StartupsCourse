const categories = require('../data/db/categories.json');
const startups = require('../data/db/startups.json');
const users = require('../data/db/users.json');


export default async (db) => {
    const dbUsers = await db['users'].bulkCreate(users);
    const dbCategories = await db['categories'].bulkCreate(categories);
    const dbStartups = await db['startups'].bulkCreate(startups);


};