"use client";
import Modal from "@/components/modals/admin/Modal";
import ProductsTable from "@/components/admin/ProductsTable";
import React, { useState } from "react";

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
