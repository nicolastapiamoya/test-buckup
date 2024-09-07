'use server'
import React from 'react';
import ListProductTable from './ListProductTable';


export default async function ServerListProductTable() {

//llamar api list de productos

    return <ListProductTable />;
}