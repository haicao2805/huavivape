import React from 'react';
import { productData } from '../../../../core/data/productData';
import { ProductCategory } from '../../../../core/models/product';
import { ProductPreviewList } from '../../components';
interface ProductHomeProps {}

export const ProductHome: React.FC<ProductHomeProps> = () => {
    return (
        <>
            <ProductPreviewList
                label={ProductCategory.PodOneTime}
                products={productData.filter((item) => item.category === ProductCategory.PodOneTime)}
            />
        </>
    );
};
