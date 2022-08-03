import React from 'react';
import { productData } from '../../../../core/data/productData';
import { ProductPreviewList } from '../../components';
interface ProductHomeProps {}

export const ProductHome: React.FC<ProductHomeProps> = () => {
    return (
        <>
            <ProductPreviewList label="Pod 1 lần" products={productData.filter((item) => item.category === 'Pod 1 lần')} />
        </>
    );
};
