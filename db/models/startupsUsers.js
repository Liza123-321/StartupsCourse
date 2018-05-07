export default (Sequelize, sequelize) => {
    return sequelize.define('startupsUsers', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.STRING
        },
        userId: {type: Sequelize.STRING},
        startupId: {type: Sequelize.STRING}
    });
};