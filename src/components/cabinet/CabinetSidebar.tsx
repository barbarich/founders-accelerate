import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, BookOpen, Link as LinkIcon, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { clearStudentSession } from "@/lib/student-session";
import { useStudentSession } from "./StudentGuard";

const navItems = [
  { to: "/cabinet", icon: LayoutDashboard, label: "Dashboard", end: true },
  { to: "/cabinet/program", icon: BookOpen, label: "Программа" },
  { to: "/cabinet/resources", icon: LinkIcon, label: "Ресурсы" },
];

export function CabinetSidebar() {
  const navigate = useNavigate();
  const session = useStudentSession();

  const handleLogout = () => {
    clearStudentSession();
    navigate("/cabinet/login");
  };

  return (
    <aside className="w-60 border-r border-border bg-card min-h-screen flex flex-col">
      <div className="p-5 border-b border-border">
        <p className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
          Личный кабинет
        </p>
        <p className="text-sm font-semibold text-foreground mt-0.5 truncate">
          {session?.fullName || session?.email || "Студент"}
        </p>
      </div>

      <nav className="flex-1 p-3 space-y-0.5">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                isActive
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              )
            }
          >
            <item.icon className="w-4 h-4 shrink-0" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-3 border-t border-border">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors w-full"
        >
          <LogOut className="w-4 h-4" />
          Выйти
        </button>
      </div>
    </aside>
  );
}
