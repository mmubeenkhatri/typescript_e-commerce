import { Product, User } from './interfaces';

interface Repository<T> {
  getById(id: number): Promise<T | undefined>;
  add(entity: T): void;
  update(id: number, entity: T): boolean;
  delete(id: number): boolean;
}

class ProductRepository implements Repository<Product> {
  // Simulated database
  private products: Product[] = [];

  async getById(id: number): Promise<Product | undefined> {
    return this.products.find(p => p.id === id);
  }

  add(product: Product): void {
    this.products.push(product);
  }

  update(id: number, product: Product): boolean {
    let index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products[index] = { ...product, id };
      return true;
    }
    return false;
  }

  delete(id: number): boolean {
    let initialLength = this.products.length;
    this.products = this.products.filter(p => p.id !== id);
    return this.products.length !== initialLength;
  }
}

class UserRepository implements Repository<User> {
  // Simulated database
  private users: User[] = [];

  async getById(id: number): Promise<User | undefined> {
    return this.users.find(u => u.id === id);
  }

  add(user: User): void {
    this.users.push(user);
  }

  update(id: number, user: User): boolean {
    let index = this.users.findIndex(u => u.id === id);
    if (index !== -1) {
      this.users[index] = { ...user, id };
      return true;
    }
    return false;
  }

  delete(id: number): boolean {
    let initialLength = this.users.length;
    this.users = this.users.filter(u => u.id !== id);
    return this.users.length !== initialLength;
  }
}

export { Repository, ProductRepository, UserRepository };
