export default (Sequelize, sequelize) => {
    return sequelize.define('categories', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.STRING
        },
        categoryName:  {type: Sequelize.STRING}
    });
};