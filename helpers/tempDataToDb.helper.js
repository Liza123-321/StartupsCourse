const categories = require('../data/db/categories.json');
const startups = require('../data/db/startups.json');
const users = require('../data/db/users.json');
const invites = require('../data/db/invites.json')


export default async (db) => {
    const dbUsers = await db['Users'].bulkCreate(users);
    const dbCategories = await db['Categories'].bulkCreate(categories);
    const dbStartups = await db['Startups'].bulkCreate(startups);
    const dbInvites = await db['Invites'].bulkCreate(invites);
};