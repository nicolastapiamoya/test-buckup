"use server"

import { configHost } from "../config";

        
        export async function allPromotion() {
            try {
                const res = await fetch(`${configHost.host}/shop-promotion`, {
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
        
        export async function PromotionById(id) {
            try {
                const res = await fetch(`${configHost.host}/shop-promotion/` + id, {
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
        
        export async function addPromotion(body) {
            try {
                const res = await fetch(`${configHost.host}/shop-promotion`, {
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
                return {status: 'fail'}
            } catch (error) {
                return error
            }
        }
        
        export async function deletePromotion(id) {
            try {
                const res = await fetch(`${configHost.host}/shop-promotion/` + id, {
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
        
        export async function updatePromotion(body,id) {
            try {
                const res = await fetch(`${configHost.host}/shop-promotion/` + id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body)
                })
        
                const data = await res.json();
                console.log(data)
                if (data.message === 'promotion updated successfully') {
                    return { status: 'ok' }
                }
                return {status: 'fail'}
            } catch (error) {
                return error
            }
        }