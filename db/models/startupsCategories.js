export default (Sequelize, sequelize) => {
    return sequelize.define('startupsCategories', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
         categoryId: {type: Sequelize.INTEGER},
        startupId: {type: Sequelize.INTEGER}
    });
};