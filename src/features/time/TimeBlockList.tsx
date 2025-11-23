import { Plus, MoreVertical, Calendar } from "lucide-react";

export function TimeBlockList() {
    const blocks = [
        { id: 1, time: "09:00 AM", title: "Deep Work: Project Alpha", duration: "2h", type: "work", color: "bg-blue-100 text-blue-700 border-blue-200" },
        { id: 2, time: "11:00 AM", title: "Team Sync Meeting", duration: "1h", type: "meeting", color: "bg-purple-100 text-purple-700 border-purple-200" },
        { id: 3, time: "12:00 PM", title: "Lunch Break", duration: "1h", type: "break", color: "bg-green-100 text-green-700 border-green-200" },
        { id: 4, time: "01:00 PM", title: "Email & Admin", duration: "1h", type: "admin", color: "bg-slate-100 text-slate-700 border-slate-200" },
        { id: 5, time: "02:00 PM", title: "Learning: React Patterns", duration: "1.5h", type: "learning", color: "bg-amber-100 text-amber-700 border-amber-200" },
    ];

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-indigo-500" />
                    Daily Schedule
                </h3>
                <button className="p-2 hover:bg-slate-50 rounded-lg text-indigo-600 transition-colors">
                    <Plus className="w-5 h-5" />
                </button>
            </div>

            <div className="space-y-4 relative">
                {/* Timeline Line */}
                <div className="absolute left-[4.5rem] top-4 bottom-4 w-px bg-slate-100" />

                {blocks.map((block) => (
                    <div key={block.id} className="flex gap-4 group relative">
                        <div className="w-16 pt-3 text-xs font-medium text-slate-400 text-right flex-shrink-0">
                            {block.time}
                        </div>

                        {/* Timeline Dot */}
                        <div className="absolute left-[4.25rem] top-4 w-2.5 h-2.5 rounded-full bg-white border-2 border-indigo-200 z-10 group-hover:border-indigo-500 transition-colors" />

                        <div className={`flex-1 p-4 rounded-xl border ${block.color} transition-transform hover:scale-[1.01] cursor-pointer`}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-bold text-sm md:text-base mb-1">{block.title}</h4>
                                    <span className="text-xs opacity-80 font-medium uppercase tracking-wide">
                                        {block.duration} • {block.type}
                                    </span>
                                </div>
                                <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-black/5 rounded">
                                    <MoreVertical className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Empty Slot Example */}
                <div className="flex gap-4 group opacity-50 hover:opacity-100 transition-opacity">
                    <div className="w-16 pt-3 text-xs font-medium text-slate-400 text-right flex-shrink-0">
                        03:30 PM
                    </div>
                    <div className="flex-1 p-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 flex items-center justify-center cursor-pointer hover:bg-slate-100 hover:border-indigo-300 transition-colors">
                        <span className="text-sm text-slate-500 font-medium flex items-center gap-2">
                            <Plus className="w-4 h-4" /> Add Block
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
