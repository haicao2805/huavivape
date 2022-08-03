import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { Footer } from '../../src/core/components/footer';
import { NavBar } from '../../src/core/components/navbar';
import { productData } from '../../src/core/data/productData';
import { Product } from '../../src/core/models/product';
import { ProductDetail } from '../../src/packages/product/containers';
interface ProductDetailPageProps {
    id: string;
}

const ProductDetailPage: NextPage<ProductDetailPageProps> = ({ id }) => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />

            <ProductDetail id={id} />
            <Footer />
        </>
    );
};

ProductDetailPage.getInitialProps = async (ctx: NextPageContext): Promise<ProductDetailPageProps> => {
    let props = { id: ctx.query?.id || '' };

    return props as ProductDetailPageProps;
};

export default ProductDetailPage;
