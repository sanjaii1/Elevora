import { Link, useLocation } from "react-router-dom";
import {
    User, Briefcase, Wallet, GraduationCap,
    Zap, Plane, Server, Users, FolderKanban,
    LayoutDashboard, CheckSquare
} from "lucide-react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

const navItems = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "To-Do", path: "/todo", icon: CheckSquare },
    { name: "Personal", path: "/personal", icon: User },
    { name: "Career", path: "/career", icon: Briefcase },
    { name: "Finance", path: "/finance", icon: Wallet },
    { name: "Learning", path: "/learning", icon: GraduationCap },
    { name: "Development", path: "/development", icon: Zap },
    { name: "Lifestyle", path: "/lifestyle", icon: Plane },
    { name: "Systems", path: "/systems", icon: Server },
    { name: "Social", path: "/social", icon: Users },
    { name: "Business", path: "/business", icon: FolderKanban },
];

export function Sidebar() {
    const location = useLocation();

    return (
        <aside className="w-64 h-screen bg-white/50 backdrop-blur-xl border-r border-white/20 flex flex-col fixed left-0 top-0 z-50">
            <div className="p-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                    EL
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Elevora
                </span>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={cn(
                                "relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                                isActive
                                    ? "text-blue-600 font-medium"
                                    : "text-slate-500 hover:text-slate-900"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute inset-0 bg-blue-50 rounded-xl"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <Icon className="w-5 h-5 relative z-10" />
                            <span className="relative z-10">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-slate-100">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                        <User className="w-4 h-4 text-slate-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900 truncate">User Name</p>
                        <p className="text-xs text-slate-500 truncate">Pro Plan</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
