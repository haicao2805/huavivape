import React from 'react';
import { productData } from '../../../../core/data/productData';
import { Product } from '../../../../core/models/product';
import { ProductCard } from '../../components';
interface ProductFullListProps {
    category: string;
}

export const ProductFullList: React.FC<ProductFullListProps> = ({ category }) => {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        setProducts(productData.filter((item) => item.category === category));
    }, []);

    return (
        <div className="bg-white">
            <div className="max-w-2xl px-4 py-4 mx-auto sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-2 mt-6 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
                    {products.map((product) => (
                        <ProductCard product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};
