import { motion } from "framer-motion";
import { FolderKanban, DollarSign, Users } from "lucide-react";

export function BusinessWidget() {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                        <FolderKanban className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Business</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-1">Freelance</h3>
                <p className="text-2xl font-bold text-slate-900 mb-4">$8,450 <span className="text-sm font-normal text-slate-500">this month</span></p>

                <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-3">
                            <Users className="w-4 h-4 text-indigo-500" />
                            <span className="text-sm font-medium text-slate-700">Active Clients</span>
                        </div>
                        <span className="text-xs font-bold bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                            3 Active
                        </span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-3">
                            <DollarSign className="w-4 h-4 text-green-500" />
                            <span className="text-sm font-medium text-slate-700">Pending Invoices</span>
                        </div>
                        <span className="text-xs font-bold bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                            $2,100
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
