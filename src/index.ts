import { Product } from './interfaces';
import { addProduct, updateProduct, deleteProduct } from './product';
import OrderProcessing from './order';
import { log } from './decorators';
import { ProductRepository, UserRepository } from './repository';

const productRepo = new ProductRepository();
const userRepo = new UserRepository();

const newProduct: Product = { id: 1, name: 'Product', price: 99.99 };
productRepo.add(newProduct);

const updatedProduct: Product = { ...newProduct, price: 109.99 };
productRepo.update(newProduct.id, updatedProduct);

productRepo.delete(newProduct.id);

const orderProcessor = new OrderProcessing();
orderProcessor.addToCart(newProduct);
const order = orderProcessor.checkout(123);

class Decorator {
    @log
    static decoratorMethod(arg: string) {
        console.log(`Called decoratorMethod with argument: ${arg}`);
    }
}

Decorator.decoratorMethod('add to cart');
