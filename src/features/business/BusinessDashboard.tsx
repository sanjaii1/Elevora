
import { Plus } from "lucide-react";
import { ClientTracker } from "./ClientTracker";
import { InvoiceLog } from "./InvoiceLog";

export function BusinessDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Business Hub</h1>
                    <p className="text-slate-500 dark:text-slate-400">Manage clients, projects, and finances.</p>
                </div>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    New Client
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ClientTracker />
                <InvoiceLog />
            </div>
        </div>
    );
}
