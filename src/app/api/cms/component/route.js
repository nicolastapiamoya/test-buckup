'use server'

export async function allComponents() {
    try {
        const res = await fetch(`http://localhost:8080/componente`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}

export async function addComponent(body) {
    try {
        const res = await fetch("http://localhost:8080/componente", {
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
        const res = await fetch(`http://localhost:8080/componente/${id}`, {
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
        const res = await fetch(`http://localhost:8080/componente/${id}`, {
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