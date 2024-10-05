'use server'

import { revalidatePath } from "next/cache";
import { configHost } from "../../config";
export const runtime = 'edge'; 
export async function allProduct() {
    try {
        const res = await fetch(`${configHost.host}/v2/shop-all-products`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}

export async function totalPageProduct(page) {
    try {
        const res = await fetch(`${configHost.host}/shop-product-pages/${page}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}

export async function productById(id) {
    try {
        const res = await fetch(`${configHost.host}/shop-product-master/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}

export async function addProduct(body){
    try {
        const res = await fetch(`${configHost.host}/shop-product`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }

}


export async function deleteProduct(id){
    try {
        const res = await fetch(`${configHost.host}/shop-product/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
    
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }

}

export async function updateProduct(body,id) {
    try {
        console.log(body, id)
        const res = await fetch(`${configHost.host}/shop-product/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        const data = await res.json();
        revalidatePath('/dashboard/products')
        return data
    } catch (error) {
        return error
    }
}

export async function addVariant(body){
    try {
        const res = await fetch(`${configHost.host}/variant`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }

}


export async function updateVariant(body,id) {
    try {
        console.log(body, id)
        const res = await fetch(`${configHost.host}/variant/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        const data = await res.json();
        revalidatePath(`/dashboard/products/${id}`)
        return data
    } catch (error) {
        return error
    }
}

export async function deleteVariant(id){
    try {
        const res = await fetch(`${configHost.host}/variant/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
    
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }

}

export async function productListnotSubsidiayById(id) {
    try {
        const res = await fetch(`${configHost.host}/shop-product-list-not-sucursal/${id}`);
        const data = await res.json();
        console.log(data)
        return data
    } catch (error) {
        return error
    }
}

export async function variantListProductById(id) {
    try {
        const res = await fetch(`${configHost.host}/variant-product/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}





