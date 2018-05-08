import express from 'express';
import bodyParser from 'body-parser';
import tempDataToDb from './helpers/tempDataToDb.helper';

export default async (container) => {
    await container.resolve('context').sequelize.sync({force: true});
    await tempDataToDb(container.resolve('context'));

    const app = express();

    app.use(bodyParser.json());

    app.use('/api',
        container.resolve('loggerGlobal'),
        container.resolve('cacheGlobal'),
        container.resolve('apiController'),
        container.resolve('errorGlobal')
    );

    return app;
};
