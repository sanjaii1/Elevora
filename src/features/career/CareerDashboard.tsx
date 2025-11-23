
import { Plus } from "lucide-react";
import { ProjectBoard } from "./ProjectBoard";
import { CareerTimeline } from "./CareerTimeline";

export function CareerDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Career & Projects</h1>
                    <p className="text-slate-500 dark:text-slate-400">Manage your professional life and ongoing work.</p>
                </div>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    New Project
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <ProjectBoard />
                </div>
                <div className="lg:col-span-1">
                    <CareerTimeline />
                </div>
            </div>
        </div>
    );
}
