"use server"
export const runtime = 'edge'; 
import { configHost } from "../config";


export async function allProductlist() {
    try {
        const res = await fetch(`${configHost.host}/shop-product-list`, {
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

export async function ProductlistById(id) {
    try {
        const res = await fetch(`${configHost.host}/shop-product-list/` + id, {
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

export async function addProductlist(body) {
    try {
        const res = await fetch(`${configHost.host}/shop-product-list`, {
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
        return { status: 'fail' }
    } catch (error) {
        return error
    }
}

export async function deleteProductlist(id) {
    try {
        console.log('Intentando eliminar el producto con ID:', id);
        const res = await fetch(`${configHost.host}/shop-product-list/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            // Si el código de estado no es 2xx, arrojar un error
            throw new Error(`Error en la eliminación: ${res.statusText}`);
        }

        const data = await res.json();
        console.log('Respuesta de la API:', data);
        return data;
    } catch (error) {
        console.error('Error al intentar eliminar el producto:', error);
        return { success: false, message: error.message };
    }
}


export async function updateProductlist(body, id) {
    try {
        const res = await fetch(`${configHost.host}/shop-product-list/` + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        const data = await res.json();

        if (data.message === 'product_list updated successfully') {
            return { status: 'ok' }
        }
        return { status: 'fail' }
    } catch (error) {
        return error
    }
}

export async function addProductInlist(body) {
    try {
        const res = await fetch(`${configHost.host}/shop-product-in-list`, {
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

export async function deleteProductInlist(id) {
    try {
        const res = await fetch(`${configHost.host}/shop-product-in-list/` + id, {
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

export async function ProductInlistById(id) {
    try {
        const res = await fetch(`${configHost.host}/shop-product-in-list/` + id, {
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