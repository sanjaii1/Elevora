import { FileText, Download, CheckCircle2, Clock, AlertCircle } from "lucide-react";

export function InvoiceLog() {
    const invoices = [
        { id: "INV-001", client: "TechStart Inc", date: "Oct 25, 2025", amount: "$4,000", status: "paid" },
        { id: "INV-002", client: "Global Solutions", date: "Nov 01, 2025", amount: "$2,100", status: "pending" },
        { id: "INV-003", client: "Design Co", date: "Nov 15, 2025", amount: "$1,500", status: "overdue" },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'paid': return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-500/20';
            case 'pending': return 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/20';
            case 'overdue': return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/20';
            default: return 'text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-500/20';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'paid': return CheckCircle2;
            case 'pending': return Clock;
            case 'overdue': return AlertCircle;
            default: return Clock;
        }
    };

    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 h-full transition-colors">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                Recent Invoices
            </h3>

            <div className="space-y-3">
                {invoices.map((invoice) => {
                    const StatusIcon = getStatusIcon(invoice.status);
                    return (
                        <div key={invoice.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/30 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors group">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${getStatusColor(invoice.status)}`}>
                                    <StatusIcon className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">{invoice.id}</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">{invoice.client}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="text-right">
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">{invoice.amount}</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">{invoice.date}</p>
                                </div>
                                <button className="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-slate-600 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                                    <Download className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
