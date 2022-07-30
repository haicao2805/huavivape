import React from 'react';
import { ProductPreviewList } from '../../components';
interface ProductHomeProps {}

export const ProductHome: React.FC<ProductHomeProps> = () => {
    return (
        <>
            <ProductPreviewList />
        </>
    );
};
