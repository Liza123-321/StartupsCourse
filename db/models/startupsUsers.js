export default (Sequelize, sequelize) => {
    return sequelize.define('startupsUsers', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        userId: {type: Sequelize.INTEGER},
        startupId: {type: Sequelize.INTEGER}
    });
};