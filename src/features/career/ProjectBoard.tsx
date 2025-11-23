import { useState } from "react";
import { MoreHorizontal, Plus, Calendar, Paperclip } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

interface Task {
    id: string;
    title: string;
    tag: string;
    members: number;
    comments: number;
    attachments: number;
    dueDate: string;
}

interface Column {
    id: string;
    title: string;
    color: string;
    tasks: Task[];
}

export function ProjectBoard() {
    const [columns] = useState<Column[]>([
        {
            id: "todo",
            title: "To Do",
            color: "bg-slate-500",
            tasks: [
                { id: "1", title: "Research Competitors", tag: "Strategy", members: 3, comments: 2, attachments: 1, dueDate: "Tomorrow" },
                { id: "2", title: "Draft Content", tag: "Marketing", members: 1, comments: 0, attachments: 0, dueDate: "Next Week" },
            ]
        },
        {
            id: "in-progress",
            title: "In Progress",
            color: "bg-blue-500",
            tasks: [
                { id: "3", title: "Design System", tag: "Design", members: 2, comments: 5, attachments: 3, dueDate: "Today" },
            ]
        },
        {
            id: "done",
            title: "Done",
            color: "bg-green-500",
            tasks: [
                { id: "4", title: "Project Setup", tag: "Dev", members: 1, comments: 1, attachments: 0, dueDate: "Yesterday" },
            ]
        }
    ]);

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full overflow-x-auto">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900">Project Board</h3>
                <div className="flex gap-2">
                    <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-500">
                        <MoreHorizontal className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="flex gap-6 min-w-[800px]">
                {columns.map((column) => (
                    <div key={column.id} className="flex-1 min-w-[250px]">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className={cn("w-2 h-2 rounded-full", column.color)} />
                                <span className="font-medium text-slate-700">{column.title}</span>
                                <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                                    {column.tasks.length}
                                </span>
                            </div>
                            <button className="text-slate-400 hover:text-slate-600">
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="space-y-3">
                            {column.tasks.map((task) => (
                                <motion.div
                                    key={task.id}
                                    layoutId={task.id}
                                    className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
                                            {task.tag}
                                        </span>
                                        <button className="text-slate-300 hover:text-slate-500">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <h4 className="font-medium text-slate-900 mb-3">{task.title}</h4>

                                    <div className="flex items-center justify-between text-xs text-slate-500">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-1">
                                                <Paperclip className="w-3 h-3" />
                                                <span>{task.attachments}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                <span>{task.dueDate}</span>
                                            </div>
                                        </div>
                                        <div className="flex -space-x-2">
                                            {[...Array(task.members)].map((_, i) => (
                                                <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">
                                                    U
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            <button className="w-full py-2 border border-dashed border-slate-300 rounded-xl text-sm text-slate-500 hover:bg-slate-50 hover:border-slate-400 transition-colors flex items-center justify-center gap-2">
                                <Plus className="w-4 h-4" />
                                Add Task
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
