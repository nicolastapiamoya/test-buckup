'use server'
import React from 'react'
import OrdersTable from './OrdersTable';
import { allOrders } from '@/app/api/sales/order/route';

export default async function ServerOrdersTable() {

    const orders = await allOrders();
    return <OrdersTable orders={orders} />;
}
