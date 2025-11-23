import { Link, useLocation } from "react-router-dom";
import {
    User, Briefcase, Wallet, GraduationCap,
    Zap, Plane, Server, Users, FolderKanban,
    LayoutDashboard, CheckSquare, X, Heart, Menu, Clock
} from "lucide-react";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "To-Do", path: "/todo", icon: CheckSquare },
    { name: "Time", path: "/time", icon: Clock },
    { name: "Personal", path: "/personal", icon: User },
    { name: "Health", path: "/health", icon: Heart },
    { name: "Career", path: "/career", icon: Briefcase },
    { name: "Finance", path: "/finance", icon: Wallet },
    { name: "Learning", path: "/learning", icon: GraduationCap },
    { name: "Development", path: "/development", icon: Zap },
    { name: "Lifestyle", path: "/lifestyle", icon: Plane },
    { name: "Systems", path: "/systems", icon: Server },
    { name: "Social", path: "/social", icon: Users },
    { name: "Business", path: "/business", icon: FolderKanban },
];

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    isCollapsed: boolean;
    onToggleCollapse: () => void;
}

export function Sidebar({ isOpen, onClose, isCollapsed, onToggleCollapse }: SidebarProps) {
    const location = useLocation();

    return (
        <>
            {/* Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside className={cn(
                "h-screen bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border-r border-white/20 dark:border-slate-700/30 flex flex-col fixed left-0 top-0 z-50 transition-all duration-300",
                "lg:translate-x-0",
                isOpen ? "translate-x-0" : "-translate-x-full",
                isCollapsed ? "lg:w-20" : "w-64"
            )}>
                <div className={cn(
                    "p-4 md:p-6 flex items-center",
                    isCollapsed ? "lg:justify-center lg:p-4" : "justify-between"
                )}>
                    <div className={cn(
                        "flex items-center gap-2",
                        isCollapsed && "lg:hidden"
                    )}>
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">
                            EL
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Elevora
                        </span>
                    </div>

                    {/* Collapsed Logo */}
                    <div className={cn(
                        "hidden",
                        isCollapsed && "lg:block"
                    )}>
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">
                            EL
                        </div>
                    </div>

                    {/* Desktop Collapse Button */}
                    <button
                        onClick={onToggleCollapse}
                        className="hidden lg:block p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        <Menu className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                    </button>

                    {/* Mobile Close Button */}
                    <button
                        onClick={onClose}
                        className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                    </button>
                </div>

                <nav className="flex-1 px-3 md:px-4 py-4 space-y-1 overflow-y-auto scrollbar-hide">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={onClose}
                                className={cn(
                                    "relative flex items-center gap-3 rounded-xl transition-all duration-200 group",
                                    isCollapsed ? "lg:justify-center lg:px-3 lg:py-3" : "px-3 md:px-4 py-3",
                                    isActive
                                        ? "text-blue-600 dark:text-blue-400 font-medium"
                                        : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                                )}
                                title={isCollapsed ? item.name : undefined}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-blue-50 dark:bg-blue-500/10 rounded-xl"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <Icon className="w-5 h-5 relative z-10 flex-shrink-0" />
                                <span className={cn(
                                    "relative z-10 text-sm md:text-base",
                                    isCollapsed && "lg:hidden"
                                )}>
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                <div className={cn(
                    "p-3 md:p-4 border-t border-slate-100 dark:border-slate-700/30",
                    isCollapsed && "lg:px-2"
                )}>
                    <div className={cn(
                        "flex items-center gap-3 px-3 md:px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50",
                        isCollapsed && "lg:justify-center lg:px-2"
                    )}>
                        <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
                            <User className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                        </div>
                        <div className={cn(
                            "flex-1 min-w-0",
                            isCollapsed && "lg:hidden"
                        )}>
                            <p className="text-sm font-medium text-slate-900 dark:text-slate-200 truncate">User Name</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Pro Plan</p>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
