import { motion } from "framer-motion";
import { Activity, Sun, CheckCircle2 } from "lucide-react";

export function PersonalWidget() {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                        <Activity className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Personal</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-1">Good Morning, User</h3>
                <p className="text-sm text-slate-500 mb-4">You're on a 5-day streak! 🔥</p>

                <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-slate-600">
                            <Sun className="w-4 h-4 text-orange-500" />
                            <span>Morning Routine</span>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                    </div>

                    <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-3/4" />
                    </div>
                    <div className="flex justify-between text-xs text-slate-400">
                        <span>Daily Goals</span>
                        <span>75%</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
