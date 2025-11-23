import { motion } from "framer-motion";
import { Users, Gift, MessageCircle } from "lucide-react";

export function SocialWidget() {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden group transition-colors"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 dark:bg-pink-500/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-pink-100 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400 rounded-lg">
                        <Users className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">Social</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Connections</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">2 birthdays this week 🎂</p>

                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 border-2 border-white dark:border-slate-600 shadow-sm">
                            <span className="font-bold text-xs">JD</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-bold text-slate-900 dark:text-white">John Doe</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                <Gift className="w-3 h-3 text-pink-500" />
                                Tomorrow
                            </p>
                        </div>
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-slate-400 hover:text-blue-500 transition-colors">
                            <MessageCircle className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 border-2 border-white dark:border-slate-600 shadow-sm">
                            <span className="font-bold text-xs">AS</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-bold text-slate-900 dark:text-white">Alice Smith</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Catch up overdue</p>
                        </div>
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-slate-400 hover:text-blue-500 transition-colors">
                            <MessageCircle className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
