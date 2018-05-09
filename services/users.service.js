import CrudService from './crud.service';

export default class User extends CrudService {
    constructor ({context, schemas, errors}) {
        super(context['Users'], schemas['user'], errors);
        this.startupRepository = context['Startups'];
    }
    async FindUser ({userName, pass}) {
        const user = await this.repository.findOne({where: {userName: userName, pass: pass}});
        console.log(user);
        if (!user) throw this.errors.notFound;
        return user;
    }

    async createStartup (id) {
        const user = await this.repository.findById(id);
        if (!user) throw this.errors.notFound;

       const  startup = await this.startupRepository.findAll({where: {IdCreator: id}});
        if (!startup) throw this.errors.notFound;

        return startup;
    }
}