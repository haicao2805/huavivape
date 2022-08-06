import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import React from 'react';
import { Layout } from '../../src/packages/product/components/layout';
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

            <Layout>
                <ProductDetail id={id} />
            </Layout>
        </>
    );
};

ProductDetailPage.getInitialProps = async (ctx: NextPageContext): Promise<ProductDetailPageProps> => {
    let props = { id: ctx.query?.id || '' };
    return props as ProductDetailPageProps;
};

export default ProductDetailPage;