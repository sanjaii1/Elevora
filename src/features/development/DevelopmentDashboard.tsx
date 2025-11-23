
import { Plus } from "lucide-react";
import { GoalTracker } from "./GoalTracker";
import { JournalEntry } from "./JournalEntry";

export function DevelopmentDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Personal Growth</h1>
                    <p className="text-slate-500 dark:text-slate-400">Set goals, track productivity, and reflect on your journey.</p>
                </div>
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    New Goal
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <GoalTracker />
                </div>
                <div className="lg:col-span-1">
                    <JournalEntry />
                </div>
            </div>
        </div>
    );
}
