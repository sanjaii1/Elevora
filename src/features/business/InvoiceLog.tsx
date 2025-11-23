import { FileText, Download, CheckCircle2, Clock, AlertCircle } from "lucide-react";

export function InvoiceLog() {
    const invoices = [
        { id: "INV-001", client: "TechStart Inc", date: "Oct 25, 2025", amount: "$4,000", status: "paid" },
        { id: "INV-002", client: "Global Solutions", date: "Nov 01, 2025", amount: "$2,100", status: "pending" },
        { id: "INV-003", client: "Design Co", date: "Nov 15, 2025", amount: "$1,500", status: "overdue" },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'paid': return 'text-green-600 bg-green-50';
            case 'pending': return 'text-orange-600 bg-orange-50';
            case 'overdue': return 'text-red-600 bg-red-50';
            default: return 'text-slate-600 bg-slate-50';
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
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-slate-500" />
                Recent Invoices
            </h3>

            <div className="space-y-3">
                {invoices.map((invoice) => {
                    const StatusIcon = getStatusIcon(invoice.status);
                    return (
                        <div key={invoice.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${getStatusColor(invoice.status)}`}>
                                    <StatusIcon className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">{invoice.id}</p>
                                    <p className="text-xs text-slate-500">{invoice.client}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="text-right">
                                    <p className="text-sm font-bold text-slate-900">{invoice.amount}</p>
                                    <p className="text-xs text-slate-500">{invoice.date}</p>
                                </div>
                                <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-white rounded-lg transition-all opacity-0 group-hover:opacity-100">
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
