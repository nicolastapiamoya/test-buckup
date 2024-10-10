const MockProduct = [
    {
        "id": 1,
        "name": "Product 1",
        "price": 19.99,
        "beforePrice": 39.990,
        "rating": 4,
        "size": "M",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "category": "Perro",
        "image": 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360',
        "brand": "Masterdog"
    },
    {
        "id": 2,
        "name": "Product 2",
        "price": 29.99,
        "beforePrice": 39.990,
        "rating": 4,
        "size": "M",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "category": "Gato",
        "image": 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360',
        "brand": "Braberi"
    },
    {
        "id": 3,
        "name": "Product 3",
        "price": 39.99,
        "beforePrice": 39.990,
        "rating": 4,
        "size": "M",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "category": "Hamster",
        "image": 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360',
        "brand": "Mastermouse"
    },
    {
        "id": 4,
        "name": "Product 4",
        "price": 49.99,
        "beforePrice": 39.990,
        "rating": 4,
        "size": "M",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "category": "Perro",
        "image": 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360',
        "brand": "Masterdog"
    },
    {
        "id": 5,
        "name": "Product 5",
        "price": 59.99,
        "beforePrice": 39.990,
        "rating": 4,
        "size": "M",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "category": "Gato",
        "image": 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360',
        "brand": "Ekos"
    },
    {
        "id": 6,
        "name": "Product 6",
        "price": 69.99,
        "beforePrice": 39.990,
        "rating": 4,
        "size": "M",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "category": "Hamster",
        "image": 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360',
        "brand": "Mastermouse"
    },
    {
        "id": 7,
        "name": "Product 7",
        "price": 79.99,
        "beforePrice": 39.990,
        "rating": 4,
        "size": "M",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "category": "Perro",
        "image": 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360',
        "brand": "Masterdog"
    },
    {
        "id": 8,
        "name": "Product 8",
        "price": 89.99,
        "beforePrice": 39.990,
        "rating": 4,
        "size": "M",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "category": "Gato",
        "image": 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360',
        "brand": "Ekos"
    },
    {
        "id": 9,
        "name": "Product 9",
        "price": 99.99,
        "beforePrice": 39.990,
        "rating": 4,
        "size": "M",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "category": "Hamster",
        "image": 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360',
        "brand": "Mastermouse"
    },
    {
        "id": 10,
        "name": "Product 10",
        "price": 109.99,
        "beforePrice": 39.990,
        "rating": 4,
        "size": "M",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "category": "Perro",
        "image": 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360',
        "brand": "Ekos"
    },
    {
        "id": 11,
        "name": "Product 11",
        "price": 59.99,
        "beforePrice": 39.990,
        "rating": 4,
        "size": "M",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "category": "Gato",
        "image": 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360',
        "brand": "Mastercat"
    }
]

const MockProductCart = [
    {
        "id": 1,
        "name": "Product 1",
        "price": 19.99,
        "beforePrice": 39.99,
        "rating": 4,
        "size": "M",
        "quantity": 2,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "category": "Perro",
        "image": 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360',
        "brand": "Masterdog"
    },
    {
        "id": 2,
        "name": "Product 2",
        "price": 29.99,
        "quantity": 2,
        "beforePrice": 39.99,
        "rating": 4,
        "size": "M",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "category": "Gato",
        "image": 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360',
        "brand": "Braberi"
    },
    {
        "id": 3,
        "name": "Product 3",
        "price": 39.99,
        "beforePrice": 39.990,
        "rating": 4,
        "quantity": 2,
        "size": "M",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "category": "Hamster",
        "image": 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360',
        "brand": "Mastermouse"
    },
    {
        "id": 4,
        "name": "Product 4",
        "price": 49.99,
        "beforePrice": 39.990,
        "rating": 4,
        "quantity": 2,
        "size": "M",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "category": "Perro",
        "image": 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360',
        "brand": "Masterdog"
    },
]

const mockData = {
    MockProduct,
    MockProductCart,
};


export default mockData;