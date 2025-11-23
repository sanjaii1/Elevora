import { motion } from "framer-motion";
import { Zap, Target, PenTool } from "lucide-react";

export function DevelopmentWidget() {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden group transition-colors"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 dark:bg-yellow-500/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-yellow-100 dark:bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 rounded-lg">
                        <Zap className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">Growth</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Productivity</h3>
                <p className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    92% <span className="text-sm font-normal text-slate-500 dark:text-slate-400">score</span>
                </p>

                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400">
                            <Target className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between text-xs mb-1">
                                <span className="font-medium text-slate-700 dark:text-slate-300">Q4 Goals</span>
                                <span className="text-slate-500 dark:text-slate-400">2/3 Done</span>
                            </div>
                            <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5">
                                <div className="bg-yellow-500 h-1.5 rounded-full w-[66%]" />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400">
                            <PenTool className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                            <p className="text-xs font-medium text-slate-700 dark:text-slate-300">Journal</p>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400">Last entry: Today</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
