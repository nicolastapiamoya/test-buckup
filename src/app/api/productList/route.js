"use server"
        
        export async function allProductlist() {
            try {
                const res = await fetch("http://localhost:8080/shop-product-list", {
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
                const res = await fetch("http://localhost:8080/shop-product-list/" + id, {
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
                const res = await fetch("http://localhost:8080/shop-product-list", {
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
        
        export async function deleteProductlist(id) {
            try {
                const res = await fetch("http://localhost:8080/shop-product-list/" + id, {
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
        
        export async function updateProductlist(body,id) {
            try {
                const res = await fetch("http://localhost:8080/shop-product-list/" + id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body)
                })
        
                const data = await res.json();
                console.log(data)
                if (data.message === 'product_list updated successfully') {
                    return { status: 'ok' }
                }
                return {status: 'fail'}
            } catch (error) {
                return error
            }
        }

        export async function addProductInlist(body) {
            try {
                const res = await fetch("http://localhost:8080/shop-product-in-list", {
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
                const res = await fetch("http://localhost:8080/shop-product-in-list/" + id, {
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
                const res = await fetch("http://localhost:8080/shop-product-in-list/" + id, {
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