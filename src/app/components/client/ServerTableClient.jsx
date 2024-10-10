'use server'
import TableClient from './TableClient';
import { allClient } from '@/app/api/client/route';

export default async function ServerTableclient(){
    const callAllClient = await allClient();
    return <TableClient client={callAllClient} />;
};