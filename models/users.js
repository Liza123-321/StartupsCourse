export default (Sequelize, sequelize) => {
    return sequelize.define('users', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        userName: {type: Sequelize.STRING},
        email: {type: Sequelize.STRING},
        userInfo: {type: Sequelize.STRING},
        pass:  {type: Sequelize.STRING},
        UserPhoto:  {type: Sequelize.STRING}
    });
};

