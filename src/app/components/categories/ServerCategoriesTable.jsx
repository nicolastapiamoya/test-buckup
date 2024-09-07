'use server'
import React from 'react';
import { allCategories } from '@/app/api/catalog/category/route';
import CategoriesTable from './CategoriesTable';

export default async function ServerCategoriesTable() {
    const categories = await allCategories();

    return <CategoriesTable categories={categories} />;
}