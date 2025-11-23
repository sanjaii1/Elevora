import { Activity, Flame, Utensils } from "lucide-react";

export function FitnessTracker() {
    const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const activity = [60, 45, 0, 30, 60, 90, 0]; // minutes

    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 h-full transition-colors">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-orange-500" />
                Fitness & Health
            </h3>

            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-bold text-slate-700 dark:text-slate-200">Weekly Activity</h4>
                    <span className="text-xs text-slate-500 dark:text-slate-400">285 mins total</span>
                </div>

                <div className="flex items-end justify-between h-32 gap-2">
                    {activity.map((mins, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                            <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-t-lg relative h-full flex items-end overflow-hidden">
                                <div
                                    className="w-full bg-orange-500 rounded-t-lg transition-all duration-500 group-hover:bg-orange-600"
                                    style={{ height: `${(mins / 90) * 100}%` }}
                                />
                            </div>
                            <span className="text-xs font-medium text-slate-400 dark:text-slate-500">{weekDays[i]}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h4 className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-4">Today's Meals</h4>
                <div className="space-y-3">
                    {[
                        { type: "Breakfast", meal: "Oatmeal & Berries", cals: 350 },
                        { type: "Lunch", meal: "Chicken Salad", cals: 450 },
                        { type: "Dinner", meal: "Grilled Salmon", cals: 550 },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/30 rounded-xl border border-slate-100 dark:border-slate-600 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white dark:bg-slate-600 rounded-lg text-orange-500">
                                    <Utensils className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">{item.type}</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.meal}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                                <Flame className="w-3 h-3 text-orange-500" />
                                {item.cals}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
