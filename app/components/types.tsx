export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    quantity: number;
    rating :Rating
  }
  type Rating = {
    rate:number;
    count:number
  }