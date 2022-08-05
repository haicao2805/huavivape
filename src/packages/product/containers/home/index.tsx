import React from 'react';
import { productData } from '../../../../../public/data/productData';
import { ProductCategory } from '../../../../core/models/product';
import { ProductPreviewList } from '../../components';
interface ProductHomeProps {}

export const ProductHome: React.FC<ProductHomeProps> = () => {
    return (
        <>
            <div className="flex flex-row">
                <div>
                    <video src="/assets/videos/introvideo1.mp4" autoPlay loop muted className="max-h-screen" />
                </div>
                <div>
                    <video src="/assets/videos/introvideo2.mov" autoPlay loop muted className="max-h-screen" />
                </div>
                <div>
                    <video src="/assets/videos/introvideo3.mov" autoPlay loop muted className="max-h-screen" />
                </div>
            </div>
            <ProductPreviewList
                label={ProductCategory.PodOneTime}
                products={productData.filter((item) => item.category === ProductCategory.PodOneTime)}
            />
        </>
    );
};
