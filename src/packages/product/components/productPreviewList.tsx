import React from 'react';
import { Product } from '../../../core/models/product';
import { ProductCard } from './productCard';
interface ProductPreviewListProps {}

export const ProductPreviewList: React.FC<ProductPreviewListProps> = () => {
    const products: Product[] = [
        {
            id: '1',
            name: 'Leather Long Wallet',
            category: 'Natural',
            price: 75000,
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg',
            imageAlt: 'Hand stitched, orange leather long wallet.',
        },
        {
            id: '2',
            name: 'Leather Long Wallet',
            category: 'Natural',
            price: 75000,
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg',
            imageAlt: 'Hand stitched, orange leather long wallet.',
        },
        {
            id: '3',
            name: 'Leather Long Wallet',
            category: 'Natural',
            price: 75000,
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg',
            imageAlt: 'Hand stitched, orange leather long wallet.',
        },
        {
            id: '4',
            name: 'Lorem Ipsum is simply .Lorem Ipsum is simply dummy text of .',
            category: 'Natural',
            price: 75,
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg',
            imageAlt: 'Hand stitched, orange leather long wallet.',
        },
    ];

    return (
        <div className="bg-white">
            <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">SẢN PHẨM ƯU ĐÃI</h2>
                    <a href="#" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
                        Xem thêm<span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>

                <div className="grid grid-cols-2 mt-6 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
                    {products.map((product) => (
                        <ProductCard product={product} />
                    ))}
                </div>

                <div className="mt-8 text-sm md:hidden">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Xem thêm<span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    );
};
