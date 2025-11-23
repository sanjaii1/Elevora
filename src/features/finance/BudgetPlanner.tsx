import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Plus } from "lucide-react";

const data = [
    { name: 'Housing', value: 1200, color: '#3b82f6' },
    { name: 'Food', value: 400, color: '#22c55e' },
    { name: 'Transport', value: 300, color: '#f59e0b' },
    { name: 'Entertainment', value: 200, color: '#ec4899' },
];

export function BudgetPlanner() {
    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 h-full transition-colors">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Monthly Budget</h3>
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-500 dark:text-slate-400">
                    <Plus className="w-4 h-4" />
                </button>
            </div>

            <div className="h-[200px] relative">
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
                            contentStyle={{ backgroundColor: '#1e293b', borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', color: '#f8fafc' }}
                            itemStyle={{ color: '#f8fafc' }}
                        />
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">$2,100</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Total Spent</span>
                </div>
            </div>

            <div className="space-y-4 mt-6">
                {data.map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.name}</span>
                        </div>
                        <span className="text-sm font-bold text-slate-900 dark:text-white">${item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
