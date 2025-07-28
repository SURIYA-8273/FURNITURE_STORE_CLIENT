import Sidebar from "@/components/admin/Sidebar";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  console.log("ADMIN LAYOUT");

  const cookieStore = await cookies();
  const token = cookieStore.get("jwt")?.value;

  console.log("TOKEN from AdminLayout:", token ? "Token received!" : "Token is null/undefined");


  if (!token) {
    redirect("/auth/admin/login");
  }
  
  return (
    <div className="bg-[#f1efef] h-screen w-screen flex">
      <Sidebar />
      <main className="ml-54 p-2 text-black w-full">{children}</main>
    </div>
  );
};

export default AdminLayout;
