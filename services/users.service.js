import CrudService from './crud.service';

export default class User extends CrudService {
    constructor ({context, schemas, errors}) {
        super(context['Users'], schemas['user'], errors);
    }
    async FindUser ({userName, pass}) {
        const user = await this.repository.findOne({where: {userName: userName, pass: pass}});
        if (!user) throw this.errors.notFound;
        return user;
    }
}