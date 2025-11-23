import { useState } from "react";
import { Save, Calendar } from "lucide-react";

export function JournalEntry() {
    const [entry, setEntry] = useState("");

    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 h-full flex flex-col transition-colors">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Daily Reflection</h3>
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Today
                </span>
            </div>

            <textarea
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                placeholder="What's on your mind today?"
                className="flex-1 w-full p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl border-none focus:ring-2 focus:ring-yellow-500/20 resize-none text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 mb-4 text-sm leading-relaxed"
            />

            <div className="flex justify-end">
                <button className="px-4 py-2 bg-slate-900 dark:bg-slate-700 text-white rounded-xl hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors flex items-center gap-2 text-sm font-medium">
                    <Save className="w-4 h-4" />
                    Save Entry
                </button>
            </div>
        </div>
    );
}
