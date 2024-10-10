'use client'
import { formAddInventory } from '@/app/actions/actions'
import { productListnotSubsidiayById, variantListProductById } from '@/app/api/catalog/product/route'
import { allSubsidiary } from '@/app/api/sales/subsidiary/route'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function AddInventory() {

    const route = useRouter()
    const [product, setProduct] = useState([])
    const [subsidiary, setSubsidiary] = useState([])
    const [variant, setVariant] = useState([])
    const [hiddenProduct, setHiddenProduct] = useState(true)
    const [hiddenVariant, setHiddenVariant] = useState(true)

    async function callSubsidiary() {
        const sucursales = await allSubsidiary()
        setSubsidiary(sucursales)
    }

    async function callProducts(id) {
        const productCall = await productListnotSubsidiayById(id)
        setProduct(productCall)
        setHiddenProduct(false)
    }

    async function callVariant(id) {
        const variantCall = await variantListProductById(id)
        setVariant(variantCall)
        setHiddenVariant(false)
    }

    useEffect(()=>{
        callSubsidiary()
    },[])


    const handleChangeSubsidiary = async (e) => {
        const idSucurcal = e.target.value
        const product = await callProducts(idSucurcal)
        console.log(product)
        if(product){
            setVariant(product.variationbyinventory)
            setHiddenProduct(true)
        }
        console.log(e.target.value)
    }

    const handleChangeProduct = async (e) => {
        const idProduct = e.target.value
        const variant = await callVariant(idProduct)
        console.log(variant)
/*         const filterVariant = variant.filter(e => e.inventories.length === 0)
        console.log('filtros')
        console.log(filterVariant) */
        if(variant && variant != undefined){
            setHiddenVariant(true)
        }else{
            setHiddenVariant(false)
        }
        console.log(e.target.value)
    }

    const handleInventory = async (e) => {
        console.log(e)
        const send = await formAddInventory(e)
        if(send.status === 'ok'){
            route.push('/administrator/inventories')
        }
    }

    return (
        <form className="w-full max-w-3xl mt-10 mb-10" action={handleInventory}>
            <div className="flex flex-wrap -mx-3 mb-2">
                
                <div className="w-full px-3 mb-6 mt-0 sm:mt-0 md:mt-4 lg:mt-4 xl:mt-0 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                        Sucursal
                    </label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name='id_sucursal' onChange={e=> handleChangeSubsidiary(e)}>
                            <option>Selecciona una sucursal</option>
                            {subsidiary.length > 0 ? subsidiary.map((srl, index) => (
                                <option key={index} value={srl.id_sucursal}>{srl.name} - {srl.adress}</option>
                            )) : <option>Selecciona una sucursal</option>
                            }

                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div className="w-full px-3 mb-6 mt-0 sm:mt-0 md:mt-4 lg:mt-4 xl:mt-0 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                        Producto
                    </label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name='id_product' onChange={e=> handleChangeProduct(e)} disabled={hiddenProduct}>
                            <option>Selecciona un producto</option>
                            {
                                product.length > 0 ? product.map((prd, index) => (
                                    <option key={index} value={prd.id_product}>{prd.name} - {prd.countVariantNotStock > 0 ? `Sin Stock - ${prd.countVariantNotStock}` : 'Con Stock'}</option>
                                )) : <option>Selecciona un producto</option>
                            }

                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                {product.length > 0 ? product.map((prd, index) => (
                    <input name="master" value={prd.master} hidden={true}/>
                )): <></>}
                
                <div className="w-full px-3 mb-6 mt-0 sm:mt-0 md:mt-4 lg:mt-4 xl:mt-0 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                        Variante sin stock
                    </label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name='id_variant' disabled={hiddenVariant}>
                        {
                                variant.length > 0 ? variant.map((vrt, index) => (
                                    <option key={index} value={vrt.id_product_variation}>{vrt.id_product_variation} - {vrt.variation_name} - {vrt.type_variation} - {vrt.inventories.length > 0 ? 'Stock disponible: '+vrt.inventories[0].stock_quantity : 'Sin inventario'}</option>
                                )) : <option>Selecciona un producto</option>
                            }

                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div className="w-full px-3 mb-6 mt-0 sm:mt-0 md:mt-4 lg:mt-4 xl:mt-0 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                        Tipo de inventario
                    </label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name='type_inventory'>
                            <option>Store</option>
                            <option>On-line</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                        Stock
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" name="stock_quantity" />
                </div>
            </div>
            <div className="flex justify-center">
                <button className="shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-primary w-64 hover:bg-hover-primary sm:mt-0 lg:mt-4 xl:mt-4 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline flex justify-center" href='/administrator/users' type="submit">
                    Agregar inventario
                </button>
            </div>
        </form>
    )
}
