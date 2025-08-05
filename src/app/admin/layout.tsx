import Sidebar from "@/components/admin/Sidebar";


const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  console.log("ADMIN LAYOUT");

  return (
    <div className="bg-[#eff0f152] h-screen w-screen flex">
      <Sidebar />
      <main className="md:ml-54 text-black w-full">{children}</main>
    </div>
  );
};

export default AdminLayout;
