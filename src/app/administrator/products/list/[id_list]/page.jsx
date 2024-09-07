
import { formUpdateListProduct } from '@/app/actions/actions'
import { allCategories } from '@/app/api/catalog/category/route'
import { ProductInlistById, ProductlistById } from '@/app/api/productList/route'
import DeleteButtonServer from '@/app/components/products/productList/DeleteButtonServer'
import SelectCategory from '@/app/components/products/productList/SelectCategory'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'
import React from 'react'

export default async function ListProductDetailPage({ params }) {
  const productInList = await ProductInlistById(params.id_list)
  const listProduct = await ProductlistById(params.id_list)
  console.log(productInList)
  const categories = await allCategories();

  return (
    <main className=" flex min-h-screen flex-col px-12 bg-gris">
      <div className="grid grid-cols-1 mt-5">
        <div className="py-3 col-span-3 rounded overflow-hidden shadow-lg bg-blanco">
          <div className="grid grid-cols-8">
            <div className="col-span-8 sm:col-span-8 md:col-span-2 lg:col-span-2 xl:col-span-2 ml-5 mt-2">
              <h1 className="font-semibold text-lg">Añade productos a la lista</h1>
            </div>
            <div className="col-span-8 sm:col-span-8 md:col-span-2 lg:col-span-2 xl:col-span-1 mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 flex justify-center">
              <Link className="bg-primary hover:bg-hover-primary text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline" href='/administrator/products/list' type="button">
                Volver
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-6 xl:grid-cols-6 gap-10 mb-5">
        <div className="col-span-6 max-w-8xl rounded shadow-lg flex flex-wrap justify-center bg-blanco">
          <form className="w-full max-w-3xl mt-10 mb-10" action={async (data) => {
            'use server'
            const productList = await formUpdateListProduct(data, params.id_list)
            if (productList.status === 'ok') {
              revalidatePath(`/administrator/products/list`)
              revalidatePath(`/administrator/products/list/${params.id_list}`)
            }
          }}>
            <div className="w-full  px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0 mb-5">
              <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="grid-first-name">
                Atributos principales de la lista
              </label>
            </div>
            {listProduct.map((item, index) => (
              <div className="flex flex-wrap -mx-3 mb-6" key={index}>
                <div className="w-full  px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Nombre
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" defaultValue={item.name} name='name' />
                </div>
                <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Descripción
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text" placeholder=""
                    defaultValue={item.description}
                    name='description' />
                </div>
              </div>
            ))}

            <div className="flex justify-center">
              <button className="bg-primary w-64 hover:bg-hover-primary sm:mt-0 lg:mt-4 xl:mt-4 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline flex justify-center" type="submit">
                Actualizar
              </button>
            </div>
          </form>
        </div>
        <SelectCategory categories={categories} id_list={params.id_list}></SelectCategory>
        <div className="col-span-4 max-w-8xl rounded shadow-lg flex flex-wrap justify-center bg-blanco">
          <div className="w-full px-3 mb-6 mt-0 sm:mt-0 md:mt-4 lg:mt-4 xl:mt-0 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
            <label className="ml-5 mt-5 block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="grid-state">
              {listProduct.length > 0 ? listProduct[0].name : <></>} - {listProduct.length > 0 ? listProduct[0].description : <></>}
            </label>
            <label className="ml-5 mt-5 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
              Productos en la lista
            </label>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {productInList.length > 0 ?
              productInList.map((product, index) => (
                <>
                  <div className="col-span-1 ">
                    <img
                      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mb-2 w-10 h-10"
                      src={product.image_product != null && product.image_product ? JSON.parse(product.image_product)[0] : '/sinfoto.jfif'}
                      alt={product.name_product}
                    />
                  </div>
                  <div className="col-span-1">
                    {product.name_product}
                  </div>
                  <div className="col-span-1">
                    {product.brand_product}
                  </div>
                  <div className="col-span-1">
                    <DeleteButtonServer id_product_in_list={product.id_product_list_product} id_product_list={product.id_product_list}></DeleteButtonServer>
                  </div>
                </>
              )) : <></>
            }
          </div>
        </div>
      </div>
    </main>
  )
}
