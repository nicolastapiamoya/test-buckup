import { configHost } from "../../config";

export async function addClient(body) {
    try {
        const res = await fetch(`${configHost.host}/shop-client`, {
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

export async function allClient() {
    try {
        const res = await fetch(`${configHost.host}/shop-client`, {
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

export async function clientById(id) {
    try {
        const res = await fetch(`${configHost.host}/shop-client/${id}`, {
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

export async function deleteClient(id) {
    try {
        const res = await fetch(`${configHost.host}/shop-client/${id}`, {
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

export async function updateClient(body, id) {
    try {
        const res = await fetch(`${configHost.host}/shop-client/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        const data = await res.json();
        if (data.message === 'client updated successfully') {
            return { status: 'ok' }
        }
        return {status: 'fail'}
    } catch (error) {
        return error
    }
}