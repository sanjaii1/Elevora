import { Bell, Search, Settings } from "lucide-react";

export function Header() {
    return (
        <header className="h-16 bg-white/50 backdrop-blur-xl border-b border-white/20 sticky top-0 z-40 px-6 flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
                <div className="relative w-96">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search anything..."
                        className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-100/50 border-none focus:ring-2 focus:ring-blue-500/20 text-sm outline-none transition-all"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors">
                    <Settings className="w-5 h-5" />
                </button>
            </div>
        </header>
    );
}
