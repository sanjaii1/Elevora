import { useState } from "react";
import { CheckCircle2, Circle, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

interface Habit {
    id: string;
    name: string;
    time: string;
    completed: boolean;
}

export function HabitTracker() {
    const [habits, setHabits] = useState<Habit[]>([
        { id: "1", name: "Morning Meditation", time: "07:00 AM", completed: true },
        { id: "2", name: "Read 30 mins", time: "08:00 PM", completed: false },
        { id: "3", name: "Workout", time: "06:00 PM", completed: false },
        { id: "4", name: "Drink 3L Water", time: "All Day", completed: false },
    ]);

    const toggleHabit = (id: string) => {
        setHabits(habits.map(h =>
            h.id === id ? { ...h, completed: !h.completed } : h
        ));
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    Today's Habits
                </h3>
                <span className="text-sm text-slate-500">
                    {habits.filter(h => h.completed).length}/{habits.length} Completed
                </span>
            </div>

            <div className="space-y-3">
                {habits.map((habit) => (
                    <motion.div
                        key={habit.id}
                        layout
                        onClick={() => toggleHabit(habit.id)}
                        className={cn(
                            "flex items-center justify-between p-4 rounded-xl transition-all cursor-pointer group border",
                            habit.completed
                                ? "bg-green-50 border-green-100"
                                : "bg-slate-50 border-transparent hover:bg-white hover:border-blue-100 hover:shadow-sm"
                        )}
                    >
                        <div className="flex items-center gap-4">
                            <div className={cn(
                                "w-6 h-6 rounded-full flex items-center justify-center transition-colors",
                                habit.completed ? "text-green-500" : "text-slate-300 group-hover:text-blue-400"
                            )}>
                                {habit.completed ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                            </div>
                            <div>
                                <p className={cn(
                                    "font-medium transition-colors",
                                    habit.completed ? "text-slate-500 line-through" : "text-slate-900"
                                )}>
                                    {habit.name}
                                </p>
                                <p className="text-xs text-slate-500">{habit.time}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
