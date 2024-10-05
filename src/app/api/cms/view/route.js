'use server'
 
import { configHost } from "../../config";

export async function allViews() {
    try {
        const res = await fetch(`${configHost.host}/vistas`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}

export async function addView() {
    try {
        const res = await fetch(`${configHost.host}/vistas`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })

        const data = await res.json();
        return data
    } catch (error) {
        return error
    }
}

export async function viewById(id) {
    try {
        console.log('first')
        const res = await fetch(`${configHost.host}/vista/${id}`, {
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


export async function deleteView(id) {
    try {
        const res = await fetch(`${configHost.host}/vistas/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })

        const data = await res.json();
        return data
    } catch (error) {
        return error
    }
}

export async function updateView(body,id) {
    try {
        console.log('first put http')
        const res = await fetch(`${configHost.host}/vista-update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        const data = await res.json();
        if (data.message === 'view updated successfully') {
            return { status: 'ok' }
        }
        return {status: 'fail'}
    } catch (error) {
        return error
    }
}

export async function componentsInView(id) {
    try {
        const res = await fetch(`${configHost.host}/vista-componente/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })

        const data = await res.json();
        return data
    } catch (error) {
        return error
    }
}


