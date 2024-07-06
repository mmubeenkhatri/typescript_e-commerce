import { Order, Product } from './interfaces';
import { deleteProduct } from './product';

class OrderProcessing {
  private cart: Product[] = [];

  addToCart(product: Product): void {
    this.cart.push(product);
  }

  checkout(userId: number): Order {
    const order: Order = {
      id: Math.floor(Math.random() * 1000),
      userId,
      products: this.cart
    };
    this.cart.forEach(p => deleteProduct(p.id));
    return order;
  }
}

export default OrderProcessing;
