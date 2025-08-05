"use client";

import AdminHeader from "@/components/admin/AdminHeader";
import SubCategoriesTable from "@/components/admin/SubCategoriesTable";

const SubCategoryList = () => {
  return (
    <div className="w-full">
      <AdminHeader name="Sub CATEGORY" />
      <div className="w-full overflow-x-auto flex justify-center items-center px-2 md:px-20 relative">
        <SubCategoriesTable />
      </div>
    </div>
  );
};

export default SubCategoryList;
