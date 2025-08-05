"use client";
import ProductsTable from "@/components/admin/ProductsTable";
import React from "react";

const ProductsList = () => {
  
  return (
    <div className="w-full">
      <h1 className="font-bold text-xl">PRODUCTS</h1>

      <div className=" overflow-x-auto flex justify-center items-center md:px-20">
       <ProductsTable/>
      </div>


    </div>
  );
};

export default ProductsList;
