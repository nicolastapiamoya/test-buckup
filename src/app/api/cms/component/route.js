'use server'

import { configHost } from "../../config";

export async function allComponents() {
    try {
        const res = await fetch(`${configHost.host}/componente`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}

export async function addComponent(body) {
    try {
        const res = await fetch(`${configHost.host}/componente`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        const data = await res.json();
        return data
    } catch (error) {
        return error
    }
}


export async function deleteComponent(id) {
    try {
        const res = await fetch(`${configHost.host}/componente/${id}`, {
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

export async function updateComponent(body,id) {
    try {
        const res = await fetch(`${configHost.host}/componente/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        const data = await res.json();
        return data
    } catch (error) {
        return error
    }
}


export async function allItemInComponent(id) {
    try {
        const res = await fetch(`${configHost.host}/items-component/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}

export async function allItems() {
    try {
        const res = await fetch(`${configHost.host}/items`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}


export async function addItemInComponent(body) {
    try {
        const res = await fetch(`${configHost.host}/items-component`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        const data = await res.json();
        return data
    } catch (error) {
        return error
    }
}


export async function updateItemInComponent(body,id) {
    try {

        const res = await fetch(`${configHost.host}/item-componente/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        const data = await res.json();

        if (data.message === 'item in component updated successfully') {
            return { status: 'ok' }
        }
        return {status: 'fail'}
    } catch (error) {
        return error
    }
}

export async function addItemComponentView(body) {
    try {
        const res = await fetch(`${configHost.host}/items-component-vista`, {
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




