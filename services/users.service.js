import CrudService from './crud.service';

export default class User extends CrudService {
    constructor ({context, schemas, errors}) {
        super(context['Users'], schemas['user'], errors);
    }
    async create (data) {
        data.validated = false;
        return super.create(data);
    }
}