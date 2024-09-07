import React from 'react';
import InventoriesTable from './InventoriesTable';
import { allInventories } from '@/app/api/catalog/inventory/route';


export default async function ServerInventoriesTable() {
    const inventories = await allInventories();

    return <InventoriesTable inventories={inventories} />;
}