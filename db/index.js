import config from 'config';
import {invites,startups, users, categories,startupsCategories,startupsUsers} from './models/index';

export default ({Sequelize}) => {
    const sequelize = new Sequelize(config.db.name, config.db.user, config.db.pass, config.db.options);

    const Invites = invites(Sequelize, sequelize);
    const Startups = startups(Sequelize, sequelize);
    const Users = users(Sequelize, sequelize);
    const Categories = categories(Sequelize, sequelize);
    const StartupsCategories = startupsCategories(Sequelize, sequelize);
    const StartupsUsers= startupsUsers(Sequelize, sequelize);


    Startups.hasMany(Invites, {foreignKey: 'projectId'});
    Invites.belongsTo(Startups, {constraints: false, foreignKey: 'projectId'});

    Users.hasMany(Invites, {foreignKey: 'userWhomId'});
    Invites.belongsTo(Users, {constraints: false, foreignKey: 'userWhomId'});

    Users.hasMany(Startups, {foreignKey: 'IdCreator'});
    Startups.belongsTo(Users, {constraints: false, foreignKey: 'IdCreator'});
//many to many
    Users.hasMany(StartupsUsers, {foreignKey: 'userId'});
    StartupsUsers.belongsTo(Users, {constraints: false, foreignKey: 'userId'});

    Startups.hasMany(StartupsUsers, {foreignKey: 'startupId'});
    StartupsUsers.belongsTo(Startups, {constraints: false, foreignKey: 'startupId'});
//many to many
    Startups.hasMany(StartupsCategories, {foreignKey: 'startupId'});
    StartupsCategories.belongsTo(Startups, {constraints: false, foreignKey: 'startupId'});

    Categories.hasMany(StartupsCategories, {foreignKey: 'categoryId'});
    StartupsCategories.belongsTo(Categories, {constraints: false, foreignKey: 'categoryId'});


    return {
        Invites,
        Startups,
        Users,
        Categories,
        StartupsCategories,
        StartupsUsers,
        sequelize,
        Sequelize
    };
};