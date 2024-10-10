'use server'
import TableSubsidiary from './TableSubsidiary';
import { allSubsidiary } from '@/app/api/sales/subsidiary/route';

export default async function ServerTablesubsidiary(){
    const callAllSubsidiary = await allSubsidiary();
    return <TableSubsidiary subsidiary={callAllSubsidiary} />;
};