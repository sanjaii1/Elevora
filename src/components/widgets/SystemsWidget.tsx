import { motion } from "framer-motion";
import { Server, Smartphone, ShieldCheck } from "lucide-react";

export function SystemsWidget() {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden group transition-colors"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 dark:bg-slate-700/30 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg">
                        <Server className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">Systems</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Assets & Security</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">All systems operational</p>

                <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-100 dark:border-slate-700">
                        <div className="flex items-center gap-3">
                            <Smartphone className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Devices</span>
                        </div>
                        <span className="text-xs font-bold bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
                            5 Active
                        </span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-100 dark:border-slate-700">
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Vault</span>
                        </div>
                        <span className="text-xs font-bold bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                            Synced
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
