import { Outlet } from "react-router-dom";
import { StudentGuard } from "@/components/cabinet/StudentGuard";
import { CabinetSidebar } from "@/components/cabinet/CabinetSidebar";
import CabinetLogin from "./CabinetLogin";

export default function CabinetLayout() {
  return (
    <StudentGuard fallback={<CabinetLogin />}>
      <div className="flex min-h-screen bg-background">
        <CabinetSidebar />
        <main className="flex-1 overflow-auto">
          <div className="max-w-5xl mx-auto p-6 lg:p-10">
            <Outlet />
          </div>
        </main>
      </div>
    </StudentGuard>
  );
}
