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
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-yellow-500" />
                Active Goals
            </h3>

            <div className="space-y-6">
                {goals.map((goal) => (
                    <motion.div
                        key={goal.id}
                        layoutId={goal.id}
                        className="border border-slate-200 rounded-xl p-4 hover:border-yellow-200 transition-colors"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <span className={cn(
                                    "text-xs font-medium px-2 py-1 rounded-md",
                                    goal.type === "Short-term" ? "bg-blue-50 text-blue-600" : "bg-purple-50 text-purple-600"
                                )}>
                                    {goal.type}
                                </span>
                                <span className="text-xs text-slate-400 flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {goal.deadline}
                                </span>
                            </div>
                            <span className="text-sm font-bold text-slate-900">{goal.progress}%</span>
                        </div>

                        <h4 className="font-bold text-slate-900 mb-4">{goal.title}</h4>

                        <div className="w-full bg-slate-100 rounded-full h-2 mb-4">
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
                                        <Circle className="w-4 h-4 text-slate-300" />
                                    )}
                                    <span className={task.completed ? "text-slate-400 line-through" : "text-slate-600"}>
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
