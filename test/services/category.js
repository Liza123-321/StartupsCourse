const CrudService = require('./crud');
const validator = require('../../helpers/validator.helper');

class OfficeService extends CrudService {

    constructor(repository, schema, errors) {
        super(repository, errors);
        this.schema = schema;
    }

    async create(data) {

		let validCheck = validator(this.schema, data);
		if (!validCheck.isValid)
            throw this.errors.validError(validCheck.errors);
		return super.create(data);
    }

    async update(data) {
        let validCheck = validator(this.schema, data);
        if (!validCheck.isValid)
            throw this.errors.validError(validCheck.errors);
		return super.update(data.id, data);
    }
}

module.exports = OfficeService;
