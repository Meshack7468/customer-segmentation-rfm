import { NavLink } from "react-router-dom";
import { BarChart3, Search, Lightbulb } from "lucide-react";

const links = [
  { to: "/", label: "Dashboard", icon: BarChart3 },
  { to: "/lookup", label: "Customer Lookup", icon: Search },
  { to: "/insights", label: "Insights & Recommendations", icon: Lightbulb },
];

export default function Navbar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 flex w-60 flex-col border-r border-border bg-[hsl(222,50%,8%)]">
      <div className="flex items-center gap-2 p-5">
        <div className="rounded-lg bg-primary p-2">
          <BarChart3 className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className="font-bold text-sm tracking-tight text-foreground">
          Customer Intelligence
        </span>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        <p className="px-3 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Navigation
        </p>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-accent text-primary font-medium"
                  : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
              }`
            }
          >
            <link.icon className="h-4 w-4" />
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
