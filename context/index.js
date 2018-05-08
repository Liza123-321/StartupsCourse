import config from 'config';
import {invites,startups, users, categories,startupsCategories,startupsUsers} from '../models/index';

export default ({Sequelize}) => {
    const sequelize = new Sequelize(config.db.name, config.db.user, config.db.pass, config.db.options);

    const Invites = invites(Sequelize, sequelize);
    const Startups = startups(Sequelize, sequelize);
    const Users = users(Sequelize, sequelize);
    const Categories = categories(Sequelize, sequelize);


    Startups.hasMany(Invites, {foreignKey: 'projectId'});
    Invites.belongsTo(Startups, {constraints: false, foreignKey: 'projectId'});

    Users.hasMany(Invites, {foreignKey: 'userWhomId'});
    Invites.belongsTo(Users, {constraints: false, foreignKey: 'userWhomId'});

    Users.hasMany(Startups, {foreignKey: 'IdCreator'});
    Startups.belongsTo(Users, {constraints: false, foreignKey: 'IdCreator'});


    Startups.belongsToMany(Users, {through: 'StartupsUsers', foreignKey: 'startupId'});
    Users.belongsToMany(Startups, {through: 'StartupsUsers', foreignKey: 'userId'});

    Startups.belongsToMany(Categories, {through: 'StartupsCategories', foreignKey: 'startupId'});
    Categories.belongsToMany(Startups, {through: 'StartupsCategories', foreignKey: 'categoryId'});


    return {
        Invites,
        Startups,
        Users,
        Categories,
        sequelize,
        Sequelize
    };
};