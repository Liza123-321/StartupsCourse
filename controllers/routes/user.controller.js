import CrudController from './crud.controller';
import {send} from '../../helpers/sender.helper';

export default class UserController extends CrudController {
    constructor ({usersService, cacheService}) {
        super(usersService, cacheService);
        this.FindUser = this.FindUser.bind(this);
        this.createStartup = this.createStartup.bind(this);

        this.routes['/FindUser'] = [
            {method: 'post', cb: this.FindUser}
        ];

        this.routes['/:id/createStartup'] = [
            {method: 'get', cb: this.createStartup}
        ];
        this.registerRoutes();
    }
    async FindUser (req, res) {
        const item = await this.service.FindUser(
            {
                userName: req.body.userName,
                pass: req.body.pass
            });
        send(req, res, item);
    }
    async createStartup (req, res) {
        const items = await this.service.createStartup(
            {
                id: req.params.id
            });
        send(req, res, items);
    }
};