import OrdersModel from '../models/ordersModel'
import ProductModel from '../models/productModel';

export default class OrdersService {
  private modelP = new ProductModel();
  private model = new OrdersModel();

  public getAll = async () => {
    const orders = await this.model.getOrders();
    const productsOrder = orders.map(order => this.modelP.getByOrder(order.id));
    const products = await Promise.all(productsOrder)

    // console.log("ProductsByOrder:", products);
    // console.log("Orders:",orders);
    
    orders.forEach((_, index: number) => {
      const productsId =  products[index].map((product) => product.id);
      // console.log(productsId);
      orders[index].productsIds = productsId
    });
    
    return orders;

  }
} 





