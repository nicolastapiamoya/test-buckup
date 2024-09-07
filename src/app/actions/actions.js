'use server'

import { revalidatePath } from "next/cache";
import { addProduct, addVariant } from "../api/catalog/product/route";
import { addProductInlist, addProductlist, updateProductlist } from "../api/productList/route";
import { addPromotionlist } from "../api/promotionList/route";
import { addInventory } from "../api/catalog/inventory/route";
import { addPromotion, updatePromotion } from "../api/promotion/route";
import { addUser } from "../api/auth/user/route";
import { addCategory } from "../api/catalog/category/route";
import { addOrder } from "../api/sales/order/route";
import { addSubsidiary } from "../api/sales/subsidiary/route";
import { addClient } from "../api/client/route";

export async function formAddProduct(body) {

    try {
        const min = 1000;
        const max = 1000000;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        const idProduct = randomNumber
        const product = {
            id_product: idProduct,
            master: body.master,
            id_category: parseInt(body.id_category),
            name: body.name,
            title: body.title,
            brand: body.brand,
            price: parseInt(body.price),
            status: body.status,
            description: body.description,
            image: JSON.stringify([])
        }

        const addActionProduct = await addProduct(product)
        revalidatePath('/dashboard/products')
        if (addActionProduct === null) {
            return { status: 'ok', id_product: idProduct }
        }
        return null
    } catch (error) {
        return error
    }
}

export async function formAddVariant(body) {

    try {
        const min = 1000;
        const max = 1000000;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        const variant = {
            id_product_variation: randomNumber,
            id_product: parseInt(body.id_product),
            variation_name: body.variation_name,
            type_variation: body.type_variation,
            description: body.description,
            images: JSON.stringify([])
        }

        const addActionVariant = await addVariant(variant)
        revalidatePath('/dashboard/products/' + body.id_product)
        return addActionVariant
    } catch (error) {
        return error
    }
}

export async function formAddProductInList(body) {

    try {
        const min = 1000;
        const max = 1000000;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        const idProductLsit = randomNumber
        const data = {
            id_product_list_product: idProductLsit,
            id_product_list: body.get('id_product_list'),
            id_product: body.get('id_product')
        }

        const addActionProductList = await addProductInlist(data)
        revalidatePath(`/dashboard/products/list/${body.get('id_product_list')}`)
        if (addActionProductList === null) {
            return { status: 'ok', id_product_list: idProductLsit }
        }
        return null
    } catch (error) {
        return error
    }
}

export async function formAddListInPromotion(body) {

    try {
        const min = 1000;
        const max = 1000000;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        let data = null
        if (body.get('type_list') === 'producto') {
            data = {
                id_promotion_list_product_list_category: randomNumber,
                id_product_list: body.get('id_list'),
                id_promotion: body.get('id_promotion')
            }
        } else {
            data = {
                id_promotion_list_product_list_category: randomNumber,
                id_category_list: body.get('id_list'),
                id_promotion: body.get('id_promotion')
            }
        }

        console.log(data)

        const addActionProductList = await addPromotionlist(data)
        console.log(`/dashboard/promotion/${body.get('id_promotion')}`)
        revalidatePath(`/dashboard/promotion/${body.get('id_promotion')}`)
        if (addActionProductList.status === 'ok') {
            return { status: 'ok' }
        } else {
            return { status: 'fail' }
        }

    } catch (error) {
        return error
    }
}

export async function formAddInventory(body) {

    try {
        const min = 1000;
        const max = 1000000;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        const idInventory = randomNumber
        const data = {
            id_product_inventory: idInventory,
            id_product_variations: body.get('id_variant'),
            stock_quantity: body.get('stock_quantity'),
            type_inventory: body.get('type_inventory'),
            id_product: body.get('id_product'),
            id_sucursal: body.get('id_sucursal')
        }

        console.log(data)

        const addActionInventory = await addInventory(data)

        if (addActionInventory.status === 'ok') {
            console.log(`/dashboard/inventories`)
            revalidatePath(`/dashboard/inventories`)

            return { status: 'ok' }
        } else {
            return { status: 'fail' }
        }

    } catch (error) {
        return error
    }
}

export async function formAddPromotion(body) {

    try {
        const min = 1000;
        const max = 1000000;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        const idPromotion = randomNumber
        console.log(body)
        const data = {
            id_promotion: idPromotion,
            name: body.name,
            description: body.description,
            start_date: body.dateRange.startDate,
            end_date: body.dateRange.endDate,
        }

        const addActionInventory = await addPromotion(data)

        if (addActionInventory.status === 'ok') {
            console.log(`/dashboard/promotion`)
            revalidatePath(`/dashboard/promotion`)

            return { status: 'ok' }
        } else {
            return { status: 'fail' }
        }

    } catch (error) {
        return error
    }
}

export async function formAddListProduct(body) {

    try {
        const min = 1000;
        const max = 1000000;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        const idPromotion = randomNumber
        console.log(body)
        const data = {
            id_product_list: idPromotion,
            name: body.get('name'),
            description: body.get('description'),
        }

        const addActionProductList = await addProductlist(data)

        if (addActionProductList.status === 'ok') {
            console.log(`/dashboard/promotion`)
            revalidatePath(`/dashboard/promotion`)
            return { status: 'ok' }
        } else {
            return { status: 'fail' }
        }

    } catch (error) {
        return error
    }
}

export async function formUpdateListProduct(body, id) {

    try {

        console.log(body)
        const data = {
            name: body.get('name'),
            description: body.get('description'),
        }

        const updateActionProductList = await updateProductlist(data, id)
        console.log(updateActionProductList)
        if (updateActionProductList.status === 'ok') {
            console.log(`/dashboard/promotion`)
            revalidatePath(`/dashboard/promotion`)
            return { status: 'ok' }
        } else {
            return { status: 'fail' }
        }

    } catch (error) {
        return error
    }
}

export async function formUpdatePromotion(body, id) {

    try {

        console.log(body, id)
        const data = {
            name: body[0].name,
            description: body[0].description,
            start_date: body[0].dateRange.startDate,
            end_date: body[0].dateRange.endDate
        }

        const updateActionPromotion = await updatePromotion(data, id)
        console.log(updateActionPromotion)
        if (updateActionPromotion.status === 'ok') {
            console.log(`/dashboard/promotion`)
            revalidatePath(`/dashboard/promotion`)
            revalidatePath(`/dashboard/promotion/${id}`)
            return { status: 'ok' }
        } else {
            return { status: 'fail' }
        }

    } catch (error) {
        return error
    }
}

export async function fromAddUser(body) {

    const min = 1000;
    const max = 1000000;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const idUser = randomNumber
    const user = {
        id_user: idUser,
        email_user: body.get('email_user'),
        password_user: body.get('password_user'),
        name_user: body.get('name_user'),
        adress_user: body.get('adress_user'),
        telephone_user: body.get('telephone_user'),
        id_role: parseInt(body.get('id_role')),
        status: body.get('status'),
        created_at: new Date(Date.now()).toISOString(),
        rut_user: body.get('rut_user')
    }

    console.log(user)

     const addActionUser = await addUser(user)
    revalidatePath('/dashboard/users')
    console.log(addActionUser)
    if (addActionUser.status === 'ok') {
        return { status: 'ok'}
    }
    return null 
}

export async function formAddCategory(body) {

    const min = 1000;
    const max = 1000000;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const idCategory = randomNumber
    const category = {
        id_category: idCategory,
        name: body.get('name'),
        description: body.get('description'),
        image_category: body.get('image'),
        path: body.get('path'),
        id_vista: body.get('id_vista') ? body.get('id_vista') : undefined,
    }

    console.log(category)

     const addActionCategory = await addCategory(category)
    revalidatePath('/dashboard/categories')
    console.log(addActionCategory)
    if (addActionCategory.status === 'ok') {
        return { status: 'ok'}
    }
    return null 
}

export async function formAddOrder(body) {

    const min = 1000;
    const max = 1000000;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const idOrder = randomNumber
    const order = {
        id_order: idOrder,
        id_shipping_cart: body.id_shipping_cart,
        type_order: body.type_order,
        type_sales: body.type_sales,
        id_sucursal: body.id_sucursal,
        id_user: body.id_user,
        payment_method: body.payment_method,
        card_name: undefined,
        card_number: undefined,
        transaction_id: parseInt(body.transaction_id),
        created_at: body.created_at,
        total: body.total,
        delivery: undefined,
        id_delivery: undefined,
        discount: undefined
    }

    console.log(order)

     const addActionOrder = await addOrder(order)
    revalidatePath('/dashboard/orders')
    console.log(addActionOrder)
    if (addActionOrder.status === 'ok') {
        return { status: 'ok'}
    }
    return null 
}


export async function formAddSubsidiary(body) {

    const min = 1000;
    const max = 1000000;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const idSucursal = randomNumber
    const sucursal = {
        id_sucursal: idSucursal,
        name: body.get('name'),
        adress: body.get('adress'),
    }

    console.log(sucursal)

     const addActionSub = await addSubsidiary(sucursal)
    revalidatePath('/dashboard/subsidiary')
    console.log(addActionSub)
    if (addActionSub.status === 'ok') {
        return { status: 'ok'}
    }
    return null 
}

export async function formAddClient(body) {

    const min = 1000;
    const max = 1000000;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const idClient = randomNumber
    const client = {
        id_client: idClient,
        name: body.get('name'),
        adress: body.get('adress'),
    }

    console.log(client)

     const addActionClient = await addClient(client)
    revalidatePath('/dashboard/client')
    console.log(addActionClient)
    if (addActionClient.status === 'ok') {
        return { status: 'ok'}
    }
    return null 
}









