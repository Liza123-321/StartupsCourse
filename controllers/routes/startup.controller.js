import CrudController from './crud.controller';
import {send} from '../../helpers/sender.helper';

export default class UserController extends CrudController {
    constructor ({startupService, cacheService}) {
        super(startupService, cacheService);

        this.addUser = this.addUser.bind(this);
        this.removeUser = this.removeUser.bind(this);

        this.routes['/:id/Users'] = [
            {method: 'put', cb: this.addUsers},
            {method: 'delete', cb: this.removeUser}
        ];

        this.registerRoutes();
    }

    async addUser(req, res) {
        await this.service.addUser(req.body.userId, req.params.id);
        send(req, res, {success: true});
    }

    async removeUser (req, res) {
        await this.service.removeUser(req.body.userId, req.params.id);

        send(req, res, {success: true});
    }
};