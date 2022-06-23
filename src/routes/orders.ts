import express from 'express';
import OrdersController from '../controllers/ordersController';

const router = express.Router(); 
const ordersController = new OrdersController();

router.get('/', ordersController.getAll);

export default router;