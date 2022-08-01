import React from 'react';
import { productData } from '../../../../core/data/productData';
import { ProductPreviewList } from '../../components';
interface ProductHomeProps {}

export const ProductHome: React.FC<ProductHomeProps> = () => {
    return (
        <>
            <ProductPreviewList label="Ưu đãi" products={productData} />
            <ProductPreviewList label="Bán chạy" products={productData} />
            <ProductPreviewList label="POD Kit" products={productData} />
        </>
    );
};
