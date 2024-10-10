'use server'
import React from 'react';
import ProductsTable from './ProductsTable';
import { allProduct, totalPageProduct } from '@/app/api/catalog/product/route';

export default async function ServerProductTable() {
    const products = await allProduct();
    //const totalPage = await totalPageProduct(10)
    return <ProductsTable products={products} />;
}