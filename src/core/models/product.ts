import { Image } from './image';

export interface Product {
    id: string;
    name: string;
    price: number;
    category: ProductCategory;
    description: string;
    images: Image[];
    features: string[];
    specifications: string[];
    boxInformation: string[];
    tastes: string[];
}

export enum ProductCategory {
    PodOneTime = 'Pod 1 lần',
}
