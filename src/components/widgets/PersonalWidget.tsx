import { motion } from "framer-motion";
import { Activity, Sun, CheckCircle2 } from "lucide-react";

export function PersonalWidget() {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden group transition-colors"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-500/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-lg">
                        <Activity className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">Personal</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Good Morning, User</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">You're on a 5-day streak! 🔥</p>

                <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                            <Sun className="w-4 h-4 text-orange-500" />
                            <span>Morning Routine</span>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                    </div>

                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-3/4" />
                    </div>
                    <div className="flex justify-between text-xs text-slate-400 dark:text-slate-500">
                        <span>Daily Goals</span>
                        <span>75%</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
