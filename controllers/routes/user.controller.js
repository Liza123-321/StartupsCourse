import CrudController from './crud.controller';
import {send} from '../../helpers/sender.helper';

export default class UserController extends CrudController {
    constructor ({userService, cacheService}) {
        super(userService, cacheService);
    }
};