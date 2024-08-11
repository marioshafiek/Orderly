type IRating = {
    rate: number;
    count: number;
  }
  
  // Type For Product
 export type TProduct = {
    id: number;
    image: string;
    category: string;
    title: string;
    description: string;
    price: number ;
    rating: IRating;
    quantity?: number;
  }