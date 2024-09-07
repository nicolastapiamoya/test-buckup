'use server'
import { allUsers } from '@/app/api/auth/user/route';
import React from 'react'
import UsersTable from './UsersTable';

export default async function ServerUsersTable() {

    const users = await allUsers();

    return (<UsersTable users={users}></UsersTable>)
}
