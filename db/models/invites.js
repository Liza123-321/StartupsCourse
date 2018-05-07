export default (Sequelize, sequelize) => {
    return sequelize.define('invites', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.STRING
        },
        userWhomId: {type: Sequelize.STRING},
        projectId: {type: Sequelize.STRING},
        flag: {type: Sequelize.STRING},
        inviteMessage:  {type: Sequelize.STRING}
    });
};