import { motion } from "framer-motion";
import { Heart, Pill, Calendar, AlertCircle } from "lucide-react";

export function HealthWidget() {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                        <Heart className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Health</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-1">Medical Records</h3>
                <p className="text-sm text-slate-500 mb-4">All records up to date</p>

                <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-3">
                            <Pill className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-medium text-slate-700">Active Meds</span>
                        </div>
                        <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                            3 Active
                        </span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-3">
                            <Calendar className="w-4 h-4 text-green-500" />
                            <span className="text-sm font-medium text-slate-700">Next Checkup</span>
                        </div>
                        <span className="text-xs text-slate-600">Dec 15</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-amber-600 bg-amber-50 p-2 rounded-lg">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>Flu shot due this month</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
