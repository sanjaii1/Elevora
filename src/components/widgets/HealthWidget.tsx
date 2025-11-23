import { motion } from "framer-motion";
import { Heart, Pill, Calendar, AlertCircle } from "lucide-react";

export function HealthWidget() {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden group transition-colors"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 dark:bg-rose-500/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-rose-100 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 rounded-lg">
                        <Heart className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">Health</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Medical Records</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">All records up to date</p>

                <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-100 dark:border-slate-700">
                        <div className="flex items-center gap-3">
                            <Pill className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Active Meds</span>
                        </div>
                        <span className="text-xs font-bold bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                            3 Active
                        </span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-100 dark:border-slate-700">
                        <div className="flex items-center gap-3">
                            <Calendar className="w-4 h-4 text-green-500" />
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Next Checkup</span>
                        </div>
                        <span className="text-xs text-slate-600 dark:text-slate-400">Dec 15</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 p-2 rounded-lg">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>Flu shot due this month</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
