
import { Plus } from "lucide-react";
import { ExpenseChart } from "./ExpenseChart";
import { BudgetPlanner } from "./BudgetPlanner";

export function FinanceDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Financial Overview</h1>
                    <p className="text-slate-500">Track your income, expenses, and savings goals.</p>
                </div>
                <button className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add Transaction
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <ExpenseChart />
                </div>
                <div className="lg:col-span-1">
                    <BudgetPlanner />
                </div>
            </div>
        </div>
    );
}
