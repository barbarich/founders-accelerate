import { Outlet } from "react-router-dom";
import { AdminGuard } from "@/components/admin/AdminGuard";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import AdminLogin from "./AdminLogin";

export default function AdminLayout() {
  return (
    <AdminGuard fallback={<AdminLogin />}>
      <div className="flex min-h-screen bg-background">
        <AdminSidebar />
        <main className="flex-1 overflow-auto">
          <div className="max-w-5xl mx-auto p-6 lg:p-10">
            <Outlet />
          </div>
        </main>
      </div>
    </AdminGuard>
  );
}
