import { motion } from "framer-motion";
import { Wallet, TrendingUp, TrendingDown } from "lucide-react";

export function FinanceWidget() {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden group transition-colors"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 dark:bg-green-500/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-lg">
                        <Wallet className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">Finance</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Total Balance</h3>
                <p className="text-2xl font-bold text-slate-900 dark:text-white mb-4">$24,500.00</p>

                <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-500/10 rounded-lg">
                        <div className="flex items-center gap-2">
                            <div className="p-1 bg-white dark:bg-slate-800 rounded text-green-600 dark:text-green-400">
                                <TrendingUp className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Income</span>
                        </div>
                        <span className="text-sm font-bold text-green-600 dark:text-green-400">+$4,200</span>
                    </div>

                    <div className="flex items-center justify-between p-2 bg-red-50 dark:bg-red-500/10 rounded-lg">
                        <div className="flex items-center gap-2">
                            <div className="p-1 bg-white dark:bg-slate-800 rounded text-red-600 dark:text-red-400">
                                <TrendingDown className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Expense</span>
                        </div>
                        <span className="text-sm font-bold text-red-600 dark:text-red-400">-$1,850</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
