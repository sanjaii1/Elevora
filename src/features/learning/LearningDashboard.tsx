
import { Plus } from "lucide-react";
import { CourseList } from "./CourseList";

export function LearningDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Learning Center</h1>
                    <p className="text-slate-500 dark:text-slate-400">Track your courses, books, and skill development.</p>
                </div>
                <button className="px-4 py-2 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add Resource
                </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <CourseList />
            </div>
        </div>
    );
}
