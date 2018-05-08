import CrudController from './crud.controller';
import {send} from '../../helpers/sender.helper';

export default class UserController extends CrudController {
    constructor ({categoryService, cacheService}) {
        super(categoryService, cacheService);
        this.registerRoutes();
    }
};