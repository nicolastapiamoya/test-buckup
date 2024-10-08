"use server"

import { revalidatePath } from "next/cache";
import { configHost } from "../config";


export async function PromotionlistById(id) {
    try {
        const res = await fetch(`${configHost.host}/shop-list-promotion/` + id, {
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

export async function addPromotionlist(body) {
    try {
        const res = await fetch(`${configHost.host}/shop-list-promotion`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        const data = await res.json();
        if (data === null) {
            revalidatePath(`/dashboard/promotion/${body.id_promotion}`)
            console.log(`/dashboard/promotion/${body.id_promotion}`)
            return { status: 'ok' }
        }
        return { status: 'fail' }
    } catch (error) {
        return error
    }
}

export async function deletePromotionlist(id, id_promotion) {
    try {
        const res = await fetch(`${configHost.host}/shop-list-promotion/` + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await res.json();
        console.log(id_promotion)
        revalidatePath(`/dashboard/promotion/${id_promotion}`)
        return data
    } catch (error) {
        return error
    }
}