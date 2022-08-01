import React from 'react';
import { Product } from '../../../core/models/product';
import { ProductCard } from './productCard';
interface ProductPreviewListProps {
    products: Product[];
    label: string;
}

export const ProductPreviewList: React.FC<ProductPreviewListProps> = ({ products, label }) => {
    return (
        <div className="bg-white">
            <div className="max-w-2xl px-4 py-4 mx-auto sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">{label}</h2>
                    <a href="#" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
                        Xem thêm<span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>

                <div className="grid grid-cols-2 mt-6 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
                    {products.slice(0, 4).map((product) => (
                        <ProductCard product={product} />
                    ))}
                </div>

                <div className="mt-4 text-sm md:hidden">
                    <a href="#" className="font-normal text-indigo-600 hover:text-indigo-500">
                        Xem thêm<span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    );
};
