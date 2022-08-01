import { Image } from './image';

export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    description: string;
    images: Image[];
}
