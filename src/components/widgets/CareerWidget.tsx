import { motion } from "framer-motion";
import { Briefcase, Clock, CheckSquare } from "lucide-react";

export function CareerWidget() {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden group transition-colors"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 dark:bg-purple-500/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-lg">
                        <Briefcase className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">Career</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Active Projects</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">3 projects in progress</p>

                <div className="space-y-3">
                    {[
                        { name: "Website Redesign", due: "2 days left", progress: 75 },
                        { name: "Mobile App API", due: "1 week left", progress: 40 },
                    ].map((project, i) => (
                        <div key={i}>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="font-medium text-slate-700 dark:text-slate-300">{project.name}</span>
                                <span className="text-slate-500 dark:text-slate-400">{project.due}</span>
                            </div>
                            <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5">
                                <div
                                    className="bg-purple-500 h-1.5 rounded-full"
                                    style={{ width: `${project.progress}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
