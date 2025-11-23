import { motion } from "framer-motion";
import { CheckSquare, Circle, CheckCircle2 } from "lucide-react";

export function TodoWidget() {
    const todos = [
        { id: "1", text: "Review project proposal", completed: false, priority: "high" },
        { id: "2", text: "Call dentist for appointment", completed: false, priority: "medium" },
        { id: "3", text: "Buy groceries", completed: true, priority: "low" },
    ];

    const pendingCount = todos.filter(t => !t.completed).length;

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden group transition-colors"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 dark:bg-emerald-500/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-lg">
                        <CheckSquare className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">Tasks</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">To-Do List</h3>
                <p className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {pendingCount} <span className="text-sm font-normal text-slate-500 dark:text-slate-400">pending</span>
                </p>

                <div className="space-y-2">
                    {todos.slice(0, 3).map((todo) => (
                        <div key={todo.id} className="flex items-center gap-2 text-sm">
                            {todo.completed ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            ) : (
                                <Circle className="w-4 h-4 text-slate-300 dark:text-slate-600 flex-shrink-0" />
                            )}
                            <span className={todo.completed ? "text-slate-400 dark:text-slate-500 line-through" : "text-slate-700 dark:text-slate-300"}>
                                {todo.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
