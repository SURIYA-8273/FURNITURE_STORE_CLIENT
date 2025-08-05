"use client";

import CategoriesTable from "@/components/admin/CategoriesTable";
import AdminHeader from "@/components/admin/AdminHeader";

const CategoryList = () => {
  return (
    <div className="w-full">
      <AdminHeader name="CATEGORY" />
      <div className="w-full overflow-x-auto flex justify-center items-center px-2 md:px-20 relative">
        <CategoriesTable />
      </div>
    </div>
  );
};

export default CategoryList;
