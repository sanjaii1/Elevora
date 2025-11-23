import { motion } from "framer-motion";
import { Target, Calendar, CheckCircle2, Circle } from "lucide-react";
import { cn } from "../../utils/cn";

export function GoalTracker() {
    const goals = [
        {
            id: "1",
            title: "Learn Rust",
            type: "Short-term",
            deadline: "Dec 31, 2025",
            progress: 45,
            tasks: [
                { id: "t1", title: "Complete Rust Book", completed: true },
                { id: "t2", title: "Build CLI Tool", completed: false },
                { id: "t3", title: "Contribute to Open Source", completed: false },
            ]
        },
        {
            id: "2",
            title: "Run a Marathon",
            type: "Long-term",
            deadline: "Jun 15, 2026",
            progress: 20,
            tasks: [
                { id: "t4", title: "Run 5k", completed: true },
                { id: "t5", title: "Run 10k", completed: false },
                { id: "t6", title: "Run Half Marathon", completed: false },
            ]
        }
    ];

    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 h-full transition-colors">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-yellow-500" />
                Active Goals
            </h3>

            <div className="space-y-6">
                {goals.map((goal) => (
                    <motion.div
                        key={goal.id}
                        layoutId={goal.id}
                        className="border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-yellow-200 dark:hover:border-yellow-500/30 transition-colors"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <span className={cn(
                                    "text-xs font-medium px-2 py-1 rounded-md",
                                    goal.type === "Short-term" ? "bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400" : "bg-purple-50 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400"
                                )}>
                                    {goal.type}
                                </span>
                                <span className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {goal.deadline}
                                </span>
                            </div>
                            <span className="text-sm font-bold text-slate-900 dark:text-white">{goal.progress}%</span>
                        </div>

                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">{goal.title}</h4>

                        <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2 mb-4">
                            <div
                                className="bg-yellow-500 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${goal.progress}%` }}
                            />
                        </div>

                        <div className="space-y-2">
                            {goal.tasks.map((task) => (
                                <div key={task.id} className="flex items-center gap-3 text-sm">
                                    {task.completed ? (
                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    ) : (
                                        <Circle className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                                    )}
                                    <span className={task.completed ? "text-slate-400 dark:text-slate-500 line-through" : "text-slate-600 dark:text-slate-300"}>
                                        {task.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
