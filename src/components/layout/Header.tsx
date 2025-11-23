import { Search, Bell, Settings, Menu } from "lucide-react";

interface HeaderProps {
    onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
    return (
        <header className="h-16 md:h-20 bg-white/30 backdrop-blur-md border-b border-white/20 flex items-center justify-between px-4 md:px-6 lg:px-8 sticky top-0 z-30">
            <div className="flex items-center gap-3 md:gap-4 flex-1">
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 hover:bg-white/50 rounded-lg transition-colors"
                >
                    <Menu className="w-5 h-5 text-slate-600" />
                </button>

                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 md:py-2.5 bg-white/50 border border-white/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 placeholder:text-slate-400"
                    />
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
                <button className="p-2 hover:bg-white/50 rounded-lg transition-colors relative">
                    <Bell className="w-5 h-5 text-slate-600" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <button className="p-2 hover:bg-white/50 rounded-lg transition-colors hidden sm:block">
                    <Settings className="w-5 h-5 text-slate-600" />
                </button>
            </div>
        </header>
    );
}
