import { Product } from './interfaces';

let products: Product[] = [];

function addProduct(product: Product): void {
  products.push(product);
}

function updateProduct(id: number, product: Product): boolean {
  let index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products[index] = { ...product, id };
    return true;
  }
  return false;
}

function deleteProduct(id: number): boolean {
  let initialLength = products.length;
  products = products.filter(p => p.id !== id);
  return products.length !== initialLength;
}

export { addProduct, updateProduct, deleteProduct };
