interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  interface User {
    id: number;
    name: string;
    email: string;
  }
  
  interface Order {
    id: number;
    userId: number;
    products: Product[];
  }
  
  export { Product, User, Order };
  