import { motion } from "framer-motion";
import { Plane, MapPin, Activity } from "lucide-react";

export function LifestyleWidget() {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden group transition-colors"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50 dark:bg-cyan-500/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-lg">
                        <Plane className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">Lifestyle</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Next Trip</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Japan in 45 days 🌸</p>

                <div className="space-y-3">
                    <div className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-100 dark:border-slate-700">
                        <div className="flex items-center gap-2 mb-2">
                            <MapPin className="w-4 h-4 text-cyan-500" />
                            <span className="text-sm font-medium text-slate-900 dark:text-white">Tokyo, Japan</span>
                        </div>
                        <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                            <span>Apr 15 - Apr 25</span>
                            <span>10 Days</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-orange-500" />
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Fitness</span>
                        </div>
                        <span className="text-xs font-bold bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300 px-2 py-1 rounded-full">
                            On Track
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
