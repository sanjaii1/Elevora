import { motion } from "framer-motion";
import { Wallet, TrendingUp, TrendingDown } from "lucide-react";

export function FinanceWidget() {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                        <Wallet className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Finance</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-1">Total Balance</h3>
                <p className="text-2xl font-bold text-slate-900 mb-4">$24,500.00</p>

                <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-2">
                            <div className="p-1 bg-white rounded text-green-600">
                                <TrendingUp className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-medium text-slate-700">Income</span>
                        </div>
                        <span className="text-sm font-bold text-green-600">+$4,200</span>
                    </div>

                    <div className="flex items-center justify-between p-2 bg-red-50 rounded-lg">
                        <div className="flex items-center gap-2">
                            <div className="p-1 bg-white rounded text-red-600">
                                <TrendingDown className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-medium text-slate-700">Expense</span>
                        </div>
                        <span className="text-sm font-bold text-red-600">-$1,850</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
