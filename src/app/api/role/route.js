"use server"

import { configHost } from "../config";

        
        export async function allRole() {
            try {
                const res = await fetch(`${configHost.host}/shop-roles`, {
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
        
        export async function roleById(id) {
            try {
                const res = await fetch(`${configHost.host}/shop-roles/` + id, {
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
        
        export async function addRole(body) {
            try {
                const res = await fetch(`${configHost.host}/shop-roles`, {
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
        
        export async function deleteRole(id) {
            try {
                const res = await fetch(`${configHost.host}/shop-roles/` + id, {
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
        
        export async function updateRole(body,id) {
            try {
                const res = await fetch(`${configHost.host}/shop-roles/` + id, {
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