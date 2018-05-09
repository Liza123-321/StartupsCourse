import CrudService from './crud.service';

export default class User extends CrudService {
    constructor ({context, schemas, errors}) {
        super(context['Startups'], schemas['startup'], errors);
        this.userRepository = context['User'];
    }
    async addUser (userId, teamId) {
        const user = await this.userRepository.findById(userId);
        if (!user) throw this.errors.notFound;

        const team = await this.repository.findById(teamId);
        if (!team) throw this.errors.notFound;

        return team.addUser(user);
    }

    async removeUser (userId, teamId) {
        const user = await this.userRepository.findById(userId);
        if (!user) throw this.errors.notFound;

        const team = await this.repository.findById(teamId);
        if (!team) throw this.errors.notFound;

        return team.removeUser(user);
    }
}