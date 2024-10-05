'use server'

import { configHost } from "../../config";

export async function login(credentials) {
    try {
        const res = await fetch(`${configHost.host}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })

        const data = await res.json();
        return data
    } catch (error) {
        return error
    }
}

export async function POST(req) {
    const body = await req.json();
    try {
        const res = await fetch(`${configHost.host}/shop-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return new Response(JSON.stringify(data), { status: 'ok' });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error adding category' }), { status: 500 });
    }
}

export async function addUser(body) {
    try {
        const res = await fetch(`${configHost.host}/shop-user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        const data = await res.json();
        if (data.id_user && data.token) {
            return { status: 'ok' }
        }
        return {status: 'fail'}
    } catch (error) {
        return error
    }
}

export async function allUsers() {
    try {
        const res = await fetch(`${configHost.host}/shop-user`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await res.json();
        return data
    } catch (error) {
        return error
    }
}

export async function GET() {
    try {
        const res = await fetch(`${configHost.host}/shop-user`);
        const data = await res.json();
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error fetching users' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

export async function usersById(id) {
    try {
        const res = await fetch(`${configHost.host}/shop-user/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await res.json();
        return data
    } catch (error) {
        return error
    }
}

export async function deleteUser(id) {
    try {
        const res = await fetch(`${configHost.host}/shop-user/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await res.json();
        return data
    } catch (error) {
        return error
    }
}

export async function updateUser(body,id) {
    try {
        const res = await fetch(`${configHost.host}/shop-user/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        
        const data = await res.json();
        if (data.message === 'user updated successfully') {
            return { status: 'ok' }
        }
        return {status: 'fail'}
    } catch (error) {
        return error
    }
}