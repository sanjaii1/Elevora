import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { BarChart2 } from "lucide-react";

export function TimeAnalytics() {
    const data = [
        { name: "Work", value: 35, color: "#6366f1" }, // Indigo
        { name: "Learning", value: 20, color: "#f59e0b" }, // Amber
        { name: "Meetings", value: 15, color: "#a855f7" }, // Purple
        { name: "Break", value: 10, color: "#22c55e" }, // Green
        { name: "Admin", value: 20, color: "#64748b" }, // Slate
    ];

    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-indigo-500" />
                Time Distribution
            </h3>

            <div className="h-64 relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', backgroundColor: '#1e293b', color: '#f8fafc' }}
                            itemStyle={{ color: '#f8fafc' }}
                        />
                    </PieChart>
                </ResponsiveContainer>

                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">6.5h</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">Tracked</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
                {data.map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-sm text-slate-600 dark:text-slate-300">{item.name}</span>
                        <span className="text-xs text-slate-400 dark:text-slate-500 ml-auto">{item.value}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
