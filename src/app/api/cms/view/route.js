'use server'

export async function allViews() {
    try {
        const res = await fetch(`http://localhost:8080/vistas`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}

export async function addView() {
    try {
        const res = await fetch("http://localhost:8080/login", {
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
        const res = await fetch(`http://localhost:8080/vistas/${id}`, {
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


export async function deleteView(id) {
    try {
        const res = await fetch(`http://localhost:8080/vistas/${id}`, {
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

export async function updateView(id) {
    try {
        const res = await fetch(`http://localhost:8080/vistas/${id}`, {
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