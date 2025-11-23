
import { Plus } from "lucide-react";
import { TravelPlanner } from "./TravelPlanner";
import { FitnessTracker } from "./FitnessTracker";

export function LifestyleDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Lifestyle Manager</h1>
                    <p className="text-slate-500 dark:text-slate-400">Plan your travels and track your fitness journey.</p>
                </div>
                <button className="px-4 py-2 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Plan Trip
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <TravelPlanner />
                <FitnessTracker />
            </div>
        </div>
    );
}
