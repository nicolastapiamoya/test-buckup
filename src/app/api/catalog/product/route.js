'use server'

import { revalidatePath } from "next/cache";

export async function allProduct() {
    try {
        const res = await fetch(`http://localhost:8080/v2/shop-all-products`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}

export async function totalPageProduct(page) {
    try {
        const res = await fetch(`http://localhost:8080/shop-product-pages/${page}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}

export async function productById(id) {
    try {
        const res = await fetch(`http://localhost:8080/shop-product-master/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}

export async function addProduct(body){
    try {
        const res = await fetch(`http://localhost:8080/shop-product`, {
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
        const res = await fetch(`http://localhost:8080/shop-product/${id}`, {
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
        const res = await fetch(`http://localhost:8080/shop-product/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        const data = await res.json();
        revalidatePath('/administrator/products')
        return data
    } catch (error) {
        return error
    }
}

export async function addVariant(body){
    try {
        const res = await fetch(`http://localhost:8080/variant`, {
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
        const res = await fetch(`http://localhost:8080/variant/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        const data = await res.json();
        revalidatePath(`/administrator/products/${id}`)
        return data
    } catch (error) {
        return error
    }
}

export async function deleteVariant(id){
    try {
        const res = await fetch(`http://localhost:8080/variant/${id}`, {
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
        const res = await fetch(`http://http://localhost:8080/shop-product-list-not-sucursal/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}

export async function variantListProductById(id) {
    try {
        const res = await fetch(`http://http://localhost:8080/variant-product/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}





