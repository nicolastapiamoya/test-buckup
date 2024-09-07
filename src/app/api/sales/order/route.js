'use server'

export async function allOrders() {
    try {
        const res = await fetch(`http://localhost:8080/shop-order`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}

export async function orderById(id) {
    try {
        const res = await fetch(`http://localhost:8080/shop-order/${id}`, {
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


export async function addOrder(body) {
    try {
        const res = await fetch("http://localhost:8080/shop-order", {
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


export async function deleteOrder(id) {
    try {
        const res = await fetch(`http://localhost:8080/shop-order/${id}`, {
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

export async function updateOrder(body, id) {
    try {
        const res = await fetch(`http://localhost:8080/shop-order/${id}`, {
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