'use server'

import { configHost } from "../../config";

export async function allCategoriesPointOfSales() {
    try {
        const res = await fetch(`${configHost.host}/shop-categories`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}

export async function allCategories() {
    try {
        const res = await fetch(`${configHost.host}/shop-categories`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}


export async function GET() {
    try {
        const res = await fetch(`${configHost.host}/shop-categories`);
        const data = await res.json();
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error fetching categories' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

export async function addCategory(body) {
    try {
        const res = await fetch(`${configHost.host}/shop-category`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        const data = await res.json();
        console.log(data)
        if (data === null) {
            return { status: 'ok' }
        }
        return {status: 'fail'}
    } catch (error) {
        return error
    }
}

export async function POST(req) {
    const body = await req.json();
    try {
        const res = await fetch(`${configHost.host}/shop-category`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error adding category' }), { status: 500 });
    }
}

export async function categoriesById(id) {
    try {
        console.log('llega', id)
        const res = await fetch(`${configHost.host}/shop-category/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log(res)
        const data = await res.json();
        console.log(data)
        return data
    } catch (error) {
        return error
    }
}

export async function deleteCategory(id) {
    try {
        const res = await fetch(`${configHost.host}/shop-category/${id}`, {
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

export async function updateCategory(body,id) {
    try {
        const res = await fetch(`${configHost.host}/shop-category/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        const data = await res.json();
        if (data.message === 'Categories updated successfully') {
            return { status: 'ok' }
        }
        return {status: 'fail'}
    } catch (error) {
        return error
    }
}

