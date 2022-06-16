import express from 'express';
import ProductController from '../controllers/productController';
import ValidateBodyPro from '../middlewares/validateBodyPro';

const router = express.Router();
const productController = new ProductController();
const middleware = new ValidateBodyPro();

router.get('/', productController.getAll);
router.post(
  '/', 
  middleware.validateBody,
  middleware.validateValues,
  productController.create,
);

export default router;