import { Image } from './image';

export interface Product {
    id: string;
    name: string;
    price: number;
    category: ProductCategory;
    description: string;
    images: Image[];
}

export enum ProductCategory {
    PodOneTime = 'Pod 1 lần',
}
