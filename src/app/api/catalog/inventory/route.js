'use server'

export async function allInventories() {
    try {
        const res = await fetch(`http://localhost:8080/all-product-inventories`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }

}

export async function inventoryById(ids) {
    try {
        const res = await fetch(`http://localhost:8080/product-inventory/${ids}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}

export async function addInventory(body) {
    try {

         const res = await fetch(`http://localhost:8080/product-inventory`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_product_inventory: body.id_product_inventory,
                id_product_variations: body.id_product_variations,
                stock_quantity: body.stock_quantity,
                type_inventory: body.type_inventory,
                id_product: body.id_product,
                id_sucursal: body.id_sucursal
            })
        });
        const data = await res.json();
        if (data === null) {
            return { status: 'ok' }
        }
        return {status: 'fail'}
    } catch (error) {
        return error
    }
}

export async function deleteInventory(id) {
    try {
        const res = await fetch(`http://localhost:8080/product-inventory/${id}`, {
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

export async function updateInventory(body,id) {
    try {
        const res = await fetch(`http://localhost:8080/product-inventory/${id}`, {
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
