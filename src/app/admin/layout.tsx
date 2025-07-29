import Sidebar from "@/components/admin/Sidebar";


const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  console.log("ADMIN LAYOUT");

  return (
    <div className="bg-[#f1efef] h-screen w-screen flex">
      <Sidebar />
      <main className="ml-54 p-2 text-black w-full">{children}</main>
    </div>
  );
};

export default AdminLayout;
