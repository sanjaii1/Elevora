import { Plus } from "lucide-react";
import { TodoList } from "./TodoList";

export function TodoDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">To-Do Manager</h1>
                    <p className="text-slate-500">Organize and track your daily tasks.</p>
                </div>
                <button className="px-4 py-2 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    New Task
                </button>
            </div>

            <TodoList />
        </div>
    );
}
