import CrudController from './crud.controller';
import {send} from '../../helpers/sender.helper';

export default class UserController extends CrudController {
    constructor ({inviteService, cacheService}) {
        super(inviteService, cacheService);
        this.registerRoutes();
    }
};