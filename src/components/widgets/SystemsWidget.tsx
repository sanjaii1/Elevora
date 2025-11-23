import { motion } from "framer-motion";
import { Server, Smartphone, ShieldCheck } from "lucide-react";

export function SystemsWidget() {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-slate-100 text-slate-600 rounded-lg">
                        <Server className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Systems</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-1">Assets & Security</h3>
                <p className="text-sm text-slate-500 mb-4">All systems operational</p>

                <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-3">
                            <Smartphone className="w-4 h-4 text-slate-500" />
                            <span className="text-sm font-medium text-slate-700">Devices</span>
                        </div>
                        <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            5 Active
                        </span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="w-4 h-4 text-slate-500" />
                            <span className="text-sm font-medium text-slate-700">Vault</span>
                        </div>
                        <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                            Synced
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
