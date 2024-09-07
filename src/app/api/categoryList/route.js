"use server"
        
        export async function allCategorylist() {
            try {
                const res = await fetch("http://localhost:8080/shop-category-list", {
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
        
        export async function CategorylistById(id) {
            try {
                const res = await fetch("http://localhost:8080/shop-category-list/" + id, {
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
        
        export async function addCategorylist(body) {
            try {
                const res = await fetch("http://localhost:8080/shop-category-list", {
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
        
        export async function deleteCategorylist(id) {
            try {
                const res = await fetch("http://localhost:8080/shop-category-list/" + id, {
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
        
        export async function updateCategorylist(body,id) {
            try {
                const res = await fetch("http://localhost:8080/shop-category-list/" + id, {
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

        
        export async function CategoryInlistById(id) {
            try {
                const res = await fetch("http://localhost:8080/shop-category-in-list/" + id, {
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
        
        export async function addCategoryInlist(body) {
            try {
                const res = await fetch("http://localhost:8080/shop-category-in-list", {
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
        
        export async function deleteCategoryInlist(id) {
            try {
                const res = await fetch("http://localhost:8080/shop-category-in-list/" + id, {
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