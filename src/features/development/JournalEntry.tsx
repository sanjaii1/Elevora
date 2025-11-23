import { useState } from "react";
import { Save, Calendar } from "lucide-react";

export function JournalEntry() {
    const [entry, setEntry] = useState("");

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900">Daily Reflection</h3>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Today
                </span>
            </div>

            <textarea
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                placeholder="What's on your mind today?"
                className="flex-1 w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-yellow-500/20 resize-none text-slate-700 placeholder:text-slate-400 mb-4 text-sm leading-relaxed"
            />

            <div className="flex justify-end">
                <button className="px-4 py-2 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors flex items-center gap-2 text-sm font-medium">
                    <Save className="w-4 h-4" />
                    Save Entry
                </button>
            </div>
        </div>
    );
}
