export default (Sequelize, sequelize) => {
    return sequelize.define('invites', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        userWhomId: {type: Sequelize.INTEGER},
        projectId: {type: Sequelize.INTEGER},
        flag: {type: Sequelize.STRING},
        inviteMessage:  {type: Sequelize.STRING}
    });
};