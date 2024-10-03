'use server'

import { configHost } from "../../config";

export async function allCartUserByIdPointOfSales(idUser) {
    try {
        const res = await fetch(`${configHost.host}/shop-cart-user/${idUser}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}

export async function getCartById(idCart) {
    try {
        const res = await fetch(`${configHost.host}/shop-cart/${idCart}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}



export async function allProductByCategoryIdPointOfSales(id) {
    try {
        const res = await fetch(`${configHost.host}/shop-category-product/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}

export async function addToCart(reqBody) {
    try {
        const res = await fetch(`${configHost.host}/shop-add-to-cart`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_shopping_cart: reqBody.id_shopping_cart,
                id_cart_items: reqBody.id_cart_items,
                id_product: reqBody.id_product,
                quantity: reqBody.quantity,
                price: reqBody.price,
                created_at: new Date(Date.now()).toISOString()
            })
        });

        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}

export async function newCartPointOfSales(reqBody) {
    try {
        const res = await fetch(`${configHost.host}/shop-cart`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    id_shopping_cart: reqBody.id_shopping_cart,
                    id_user: reqBody.id_user,
                    status_cart: 'active',
                    origin_cart: 'store',
                    created_at: new Date(Date.now()).toISOString()
                }
            )

        });
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}

export async function updateItemInCartPointOfSales(reqBody, id) {
    try {
        const res = await fetch(`${configHost.host}/shop-update-to-cart/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    quantity: reqBody.quantity,
                    price: reqBody.price,
                }
            )

        });
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}

export async function deleteItemInCartPointOfSales(id) {
    try {
        const res = await fetch(`${configHost.host}/shop-delete-to-cart/${id}`, {
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


