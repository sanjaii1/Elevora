import { Search, Bell, Settings, Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "../providers/ThemeProvider";

interface HeaderProps {
    onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
    const { theme, setTheme } = useTheme();

    return (
        <header className="h-16 md:h-20 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md border-b border-white/20 dark:border-slate-700/30 flex items-center justify-between px-4 md:px-6 lg:px-8 sticky top-0 z-30 transition-colors duration-300">
            <div className="flex items-center gap-3 md:gap-4 flex-1">
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 hover:bg-white/50 dark:hover:bg-slate-800/50 rounded-lg transition-colors"
                >
                    <Menu className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                </button>

                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 bg-white/50 dark:bg-slate-800/50 border border-white/20 dark:border-slate-700/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors"
                    />
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 hover:bg-white/50 dark:hover:bg-slate-800/50 rounded-lg transition-colors text-slate-600 dark:text-slate-300"
                >
                    {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <button className="p-2 hover:bg-white/50 dark:hover:bg-slate-800/50 rounded-lg transition-colors relative text-slate-600 dark:text-slate-300">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                </button>
                <button className="hidden sm:block p-2 hover:bg-white/50 dark:hover:bg-slate-800/50 rounded-lg transition-colors text-slate-600 dark:text-slate-300">
                    <Settings className="w-5 h-5" />
                </button>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[2px] cursor-pointer">
                    <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 p-[2px]">
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                            alt="User"
                            className="w-full h-full rounded-full"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
