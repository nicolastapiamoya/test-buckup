"use client";

import { useState, useEffect } from "react";
import { LayoutGrid, List, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";


// Mock product data
const products = [
  { id: 1, name: "Product 1", price: 19.99, category: "Perro", image: 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360', brand: 'Masterdog' },
  { id: 2, name: "Product 2", price: 29.99, category: "Gato", image: 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360', brand: 'Braberi' },
  { id: 3, name: "Product 3", price: 39.99, category: "Hamster", image: 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360', brand: 'Mastermouse' },
  { id: 4, name: "Product 4", price: 49.99, category: "Perro", image: 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360', brand: 'Masterdog' },
  { id: 5, name: "Product 5", price: 59.99, category: "Gato", image: 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360', brand: 'Ekos' },
  { id: 6, name: "Product 6", price: 69.99, category: "Hamster", image: 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360', brand: 'Mastermouse' },
  { id: 7, name: "Product 7", price: 79.99, category: "Perro", image: 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360', brand: 'Masterdog' },
  { id: 8, name: "Product 8", price: 89.99, category: "Gato", image: 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360', brand: 'Ekos' },
  { id: 9, name: "Product 9", price: 99.99, category: "Hamster", image: 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360', brand: 'Mastermouse' },
  { id: 10, name: "Product 10", price: 109.99, category: "Perro", image: 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360', brand: 'Ekos' },
  { id: 11, name: "Product 11", price: 59.99, category: "Gato", image: 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360', brand: 'Mastercat' },
];

export default function ProductCatalog() {
  const [viewType, setViewType] = useState("grid");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const searchParams = useSearchParams();
  const [filterProduct, setFilterProduct] = useState({
    category: { Perro: false, Gato: false, Hamster: false },
    brand: { Ekos: false, Braberi: false, Mastercat: false, Masterdog: false },
    priceRange: { min: "", max: "" },
  });

  useEffect(() => {
    const ctg = searchParams.get('ctg');
    const brand = searchParams.get('brand');
    const priceRange = searchParams.get('priceRange');
    const updatedFilterProduct = { ...filterProduct }; // Clonar el objeto

    // Manejar categorías
    if (ctg) {
      const categories = decodeURIComponent(ctg).split(',');
      categories.forEach(category => {
        if (updatedFilterProduct.category[category] !== undefined) {
          updatedFilterProduct.category[category] = true;
        }
      });
    }

    // Manejar marcas
    if (brand) {
      const brands = decodeURIComponent(brand).split(',');
      brands.forEach(b => {
        if (updatedFilterProduct.brand[b] !== undefined) {
          updatedFilterProduct.brand[b] = true;
        }
      });
    }

    // Manejar rango de precios
    if (priceRange) {
      const range = decodeURIComponent(priceRange).replace(/[()]/g, "").split('...');
      if (range.length === 2) {
        updatedFilterProduct.priceRange.min = range[0];
        updatedFilterProduct.priceRange.max = range[1];
      }
    }

    setFilterProduct(updatedFilterProduct);
  }, [searchParams]); // Ejecutar cuando cambian los parámetros de búsqueda


  const [filters, setFilters] = useState(filterProduct);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const filteredProducts = products.filter((product) => {
    const categoryFilter =
      !filters.category.Perro && !filters.category.Gato && !filters.category.Hamster
        ? true
        : filters.category[product.category];
    const bandFilter =
      !filters.brand.Ekos && !filters.brand.Braberi && !filters.brand.Mastercat && !filters.brand.Masterdog
        ? true
        : filters.brand[product.brand];
    const priceFilter =
      (filters.priceRange.min === "" || product.price >= parseFloat(filters.priceRange.min)) &&
      (filters.priceRange.max === "" || product.price <= parseFloat(filters.priceRange.max));
    return categoryFilter && priceFilter && bandFilter;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (category) => {
    setFilters((prev) => ({
      ...prev,
      category: { ...prev.category, [category]: !prev.category[category] },
    }));
  };

  const handleBrandChange = (brand) => {
    setFilters((prev) => ({
      ...prev,
      brand: { ...prev.brand, [brand]: !prev.brand[brand] },
    }));
  };

  const handlePriceRangeChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: { ...prev.priceRange, [type]: value },
    }));
  };

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row gap-8 px-10 mt-8">
      {/* Filters */}
      <aside className="w-full md:w-1/4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="font-bold mb-4">Filters</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Categorías</h3>
              <div className="space-y-2">
                {Object.keys(filters.category).map((category) => (
                  <div key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      id={category}
                      checked={filters.category[category]}
                      onChange={() => handleCategoryChange(category)}
                      className="mr-2"
                    />
                    <label htmlFor={category} className="cursor-pointer">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Marcas</h3>
              <div className="space-y-2">
                {Object.keys(filters.brand).map((brand) => (
                  <div key={brand} className="flex items-center">
                    <input
                      type="checkbox"
                      id={brand}
                      checked={filters.brand[brand]}
                      onChange={() => handleBrandChange(brand)}
                      className="mr-2"
                    />
                    <label htmlFor={brand} className="cursor-pointer">
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Rango de precio</h3>
              <div className="flex justify-between gap-4 sm:flex-col md:flex-col lg:flex-col">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.priceRange.min}
                  onChange={(e) => handlePriceRangeChange("min", e.target.value)}
                  className="border rounded p-2 w-28"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.priceRange.max}
                  onChange={(e) => handlePriceRangeChange("max", e.target.value)}
                  className="border rounded p-2 w-28"
                />
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Product List */}
      <main className="w-full md:w-3/4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <button
              className={`p-2 rounded ${viewType === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => setViewType("grid")}
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              className={`p-2 rounded ${viewType === "list" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => setViewType("list")}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border rounded p-2"
          >
            <option value="asc">Ordenar por: menor a mayor</option>
            <option value="desc">Ordenar por: mayor a menor</option>
          </select>
        </div>

        <div className={viewType === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" : "space-y-4"}>
          {paginatedProducts.map((product) => (
            <div key={product.id}>
              <div className="mb-10 border-solid border-2 rounded-lg p-8 mx-5" >
                <Link className=" rounded-lg" href={`/ecommerce/pdp/${product.id}`}>
                  <div className="flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-[160px] w-[140px] flex items-center justify-center object-cover transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" // Ajusta la imagen al contenedor
                    />
                  </div>
                </Link>
                <div className="flex justify-between">
                  <div className="font-normal text-sm mt-3">{product.category}</div>
                  <div className="font-normal text-sm mt-3">{product.brand}</div>
                </div>
                <div className="font-semibold text-sm uppercase flex justify-center mt-5">{product.name}</div>
                <div className="font-light text-sm mt-3 line-through">${product.price.toFixed(2)} CLP</div>
                <div className="font-bold text-xl mt-1">${product.price.toFixed(2)} CLP</div>
                <div className="flex justify-center">
                  <button className="mt-3 w-48 border-solid border rounded-lg p-2 font-normal flex justify-center text-sm bg-primary text-white shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">Añadir al carro</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            className="border rounded p-2"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="border rounded p-2"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </main>
    </div>
  );
}
