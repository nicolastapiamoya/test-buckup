'use server'

import { configHost } from "../../config";

export async function addSubsidiary(body) {
    try {
        const res = await fetch(`${configHost.host}/shop-sucursal`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        const data = await res.json();
        if (data === null) {
            return { status: 'ok' }
        }
        return {status: 'fail'}
    } catch (error) {
        return error
    }
}

export async function allSubsidiary() {
    try {
        const res = await fetch(`${configHost.host}/shop-sucursal`, {
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

export async function subsidiaryById(id) {
    try {
        const res = await fetch(`${configHost.host}/shop-sucursal/${id}`, {
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

export async function deleteSubsidiary(id) {
    try {
        const res = await fetch(`${configHost.host}/shop-sucursal/${id}`, {
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

export async function updateSubsidiary(body,id) {
    try {
        const res = await fetch(`${configHost.host}/shop-sucursal/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        const data = await res.json();
        if (data.message === 'Subsidiary updated successfully') {
            return { status: 'ok' }
        }
        return {status: 'fail'}
    } catch (error) {
        return error
    }
}