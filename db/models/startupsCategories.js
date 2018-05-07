export default (Sequelize, sequelize) => {
    return sequelize.define('startupsCategories', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.STRING
        },
         categoryId: {type: Sequelize.STRING},
        startupId: {type: Sequelize.STRING}
    });
};