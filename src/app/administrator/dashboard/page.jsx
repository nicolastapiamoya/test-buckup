'use client'
import React, { useState } from "react";
import { FiSearch, FiPlus, FiRefreshCcw, FiBarChart2, FiPackage, FiDollarSign, FiTrendingUp } from "react-icons/fi";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function SalesDashboard(){
  const [activeTab, setActiveTab] = useState("overview");

  const salesData = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 4500 },
    { name: "May", sales: 6000 },
    { name: "Jun", sales: 5500 },
  ];

  const inventoryData = [
    { id: 1, name: "Product A", stock: 150, category: "Electronics" },
    { id: 2, name: "Product B", stock: 75, category: "Clothing" },
    { id: 3, name: "Product C", stock: 200, category: "Home & Living" },
    { id: 4, name: "Product D", stock: 50, category: "Electronics" },
    { id: 5, name: "Product E", stock: 100, category: "Clothing" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <nav className="bg-white shadow-lg rounded-lg p-4 mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Product Sales & Inventory Dashboard</h1>
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 rounded-md ${activeTab === "overview" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`px-4 py-2 rounded-md ${activeTab === "inventory" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
              onClick={() => setActiveTab("inventory")}
            >
              Inventory
            </button>
          </div>
        </div>
      </nav>

      {activeTab === "overview" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Total Revenue</h2>
              <FiDollarSign className="text-2xl text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">$125,000</p>
            <p className="text-sm text-gray-500 mt-2">+12% from last month</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Total Sales</h2>
              <FiBarChart2 className="text-2xl text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">1,234</p>
            <p className="text-sm text-gray-500 mt-2">+5% from last month</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Top Product</h2>
              <FiTrendingUp className="text-2xl text-purple-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">Product A</p>
            <p className="text-sm text-gray-500 mt-2">250 units sold</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md col-span-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {activeTab === "inventory" && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Inventory Management</h2>
            <div className="flex space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                <FiPlus className="mr-2" /> Add Product
              </button>
              <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300">
                <FiRefreshCcw className="mr-2" /> Refresh
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">ID</th>
                  <th className="px-4 py-2 text-left">Product Name</th>
                  <th className="px-4 py-2 text-left">Stock</th>
                  <th className="px-4 py-2 text-left">Category</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventoryData.map((product) => (
                  <tr key={product.id} className="border-b border-gray-200">
                    <td className="px-4 py-2">{product.id}</td>
                    <td className="px-4 py-2">{product.name}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${product.stock > 100 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                      >
                        {product.stock}
                      </span>
                    </td>
                    <td className="px-4 py-2">{product.category}</td>
                    <td className="px-4 py-2">
                      <button className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                      <button className="text-red-500 hover:text-red-700">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
