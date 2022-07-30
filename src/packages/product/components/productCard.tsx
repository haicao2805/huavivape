import React from 'react';
import { Product } from '../../../core/models/product';
interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div key={product.id} className="relative flex flex-col group">
            <div className="w-full h-56 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
                <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center w-full h-full" />
            </div>
            <div className="flex flex-col justify-between flex-1 space-y-2 border-2 border-black">
                <div className="text-center duration-300 border-2 border-black md:border-red-500 hover:bg-orange-200">
                    <p className="text-sm text-gray-500">{product.category}</p>
                </div>
                <div className="flex-1 border-2 border-blue-500">
                    <p className="overflow-hidden text-lg text-gray-700 text-ellipsis">{product.name}</p>
                </div>
                <div className="border-2 border-green-500">
                    <p className="text-sm font-bold text-gray-900 ">{product.price}</p>
                </div>
            </div>
        </div>
    );
};
