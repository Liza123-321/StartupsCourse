const CrudController = require('./crud');

class OfficeController extends CrudController {
    constructor(agentService, cacheService) {
        super(agentService, cacheService);
        this.registerRoutes();
    }
}

module.exports = (officeService, cacheService) => {
    const controller = new OfficeController(officeService, cacheService);
    return controller.router;
};