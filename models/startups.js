export default (Sequelize, sequelize) => {
    return sequelize.define('startups', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        projectName: {type: Sequelize.STRING},
        projectDescription: {type: Sequelize.STRING},
        projectStatus: {type: Sequelize.STRING},
        IdCreator:  {type: Sequelize.INTEGER}
    });
};
