"use server"

import { configHost } from "../config";


export async function allLogs() {
    try {
        const res = await fetch(`${configHost.host}/all-logs`, {
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

export async function limitLogs() {
    try {
        const res = await fetch(`${configHost.host}/all-logs-limit/4`, {
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

