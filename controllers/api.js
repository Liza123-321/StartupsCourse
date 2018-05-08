import {Router} from 'express';

module.exports = ({
  userController,
  startupController,
  categoryController
}) => {
  const router = Router();

  router.use('/user', userController.router);
  router.use('/startup', startupController.router);
  router.use('/category', categoryController.router);

  return router;
};
