import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Trophy } from "lucide-react";

export function LearningWidget() {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden group transition-colors"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 dark:bg-orange-500/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 rounded-lg">
                        <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">Learning</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Weekly Progress</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">4 hrs 30 mins learned</p>

                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400">
                            <BookOpen className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between text-xs mb-1">
                                <span className="font-medium text-slate-700 dark:text-slate-300">React Patterns</span>
                                <span className="text-slate-500 dark:text-slate-400">60%</span>
                            </div>
                            <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5">
                                <div className="bg-orange-500 h-1.5 rounded-full w-[60%]" />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400">
                            <Trophy className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between text-xs mb-1">
                                <span className="font-medium text-slate-700 dark:text-slate-300">AWS Cert</span>
                                <span className="text-slate-500 dark:text-slate-400">30%</span>
                            </div>
                            <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5">
                                <div className="bg-orange-500 h-1.5 rounded-full w-[30%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
