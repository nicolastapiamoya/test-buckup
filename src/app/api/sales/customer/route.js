export async function addClient(credentials) {
    try {
        const res = await fetch("http://localhost:8080/login", {
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

export async function allClient() {
    try {
        const res = await fetch("http://localhost:8080/shop-client", {
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
        const res = await fetch(`http://localhost:8080/shop-client/${id}`, {
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
        const res = await fetch(`http://localhost:8080/shop-client/${id}`, {
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
        const res = await fetch(`http://localhost:8080/shop-client/${id}`, {
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