import express from 'express';
import UserController from '../controllers/userController';
import ValidateBodyUser from '../middlewares/validateBodyUser';

const router = express.Router();
const userController = new UserController();
const middleware = new ValidateBodyUser();

router.post(
  '/', 
  middleware.validateBody,
  middleware.validateValues,
  userController.create,
);

export default router;