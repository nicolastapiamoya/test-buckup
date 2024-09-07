'use server'

export async function allCategoriesPointOfSales() {
    try {
        const res = await fetch(`http://localhost:8080/shop-categories`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}

export async function allCategories() {
    try {
        const res = await fetch(`http://localhost:8080/shop-categories`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}

export async function addCategory(body) {
    try {
        const res = await fetch("http://localhost:8080/shop-category", {
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

export async function categoriesById(id) {
    try {
        const res = await fetch(`http://localhost:8080/shop-categories/${id}`, {
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

export async function deleteCategory(id) {
    try {
        const res = await fetch(`http://localhost:8080/shop-category/${id}`, {
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
        const res = await fetch(`http://localhost:8080/shop-categories/${id}`, {
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

