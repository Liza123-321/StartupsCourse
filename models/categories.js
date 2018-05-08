export default (Sequelize, sequelize) => {
    return sequelize.define('categories', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        categoryName:  {type: Sequelize.STRING}
    });
};