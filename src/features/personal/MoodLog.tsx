import { useState } from "react";
import { Smile, Frown, Meh, Heart, Activity, Droplets, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const MOODS = [
    { icon: Smile, label: "Great", color: "text-green-500", bg: "bg-green-50" },
    { icon: Meh, label: "Okay", color: "text-yellow-500", bg: "bg-yellow-50" },
    { icon: Frown, label: "Bad", color: "text-red-500", bg: "bg-red-50" },
];

const METRICS = [
    { icon: Moon, label: "Sleep", value: "7h 30m", unit: "hrs" },
    { icon: Droplets, label: "Water", value: "2.5", unit: "L" },
    { icon: Activity, label: "Steps", value: "8,432", unit: "steps" },
];

export function MoodLog() {
    const [selectedMood, setSelectedMood] = useState<string | null>(null);

    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 h-full transition-colors">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Wellness Log
            </h3>

            <div className="mb-8">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">How are you feeling?</p>
                <div className="flex gap-3">
                    {MOODS.map((mood) => {
                        const Icon = mood.icon;
                        const isSelected = selectedMood === mood.label;

                        return (
                            <button
                                key={mood.label}
                                onClick={() => setSelectedMood(mood.label)}
                                className={cn(
                                    "flex-1 p-3 rounded-xl border transition-all flex flex-col items-center gap-2",
                                    isSelected
                                        ? `border-${mood.color.split('-')[1]}-500 ${mood.bg} dark:bg-opacity-20 ring-2 ring-${mood.color.split('-')[1]}-200 dark:ring-${mood.color.split('-')[1]}-500/30`
                                        : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700"
                                )}
                            >
                                <Icon className={cn("w-6 h-6", mood.color)} />
                                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{mood.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Daily Metrics</p>
                <div className="grid grid-cols-3 gap-3">
                    {METRICS.map((metric) => {
                        const Icon = metric.icon;
                        return (
                            <div key={metric.label} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center">
                                <Icon className="w-4 h-4 text-slate-400 dark:text-slate-500 mb-2" />
                                <span className="text-lg font-bold text-slate-900 dark:text-white">{metric.value}</span>
                                <span className="text-xs text-slate-500 dark:text-slate-400">{metric.unit}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
