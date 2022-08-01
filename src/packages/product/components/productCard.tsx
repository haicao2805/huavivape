import { useRouter } from 'next/router';
import React from 'react';
import { Product } from '../../../core/models/product';
import { toMoney } from '../../../core/utils/moneyString';
interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const router = useRouter();

    return (
        <div
            key={product.id}
            className="relative flex flex-col group"
            onClick={() => {
                router.push(`/products/${product.id}`);
            }}
        >
            <div className="w-full h-56 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
                <img src={product.images[0].src} alt={product.images[0].alt} className="object-cover object-center w-full h-full" />
            </div>
            <div className="flex flex-col justify-between flex-1 space-y-2">
                <div className="text-center duration-300 hover:bg-orange-200">
                    <p className="text-sm text-gray-500">{product.category}</p>
                </div>
                <div className="flex-1 ">
                    <p className="overflow-hidden text-lg text-gray-700 text-ellipsis">{product.name}</p>
                </div>
                <div>
                    <p className="text-sm font-bold text-gray-900 ">{toMoney(product.price ?? 0)}</p>
                </div>
            </div>
        </div>
    );
};
