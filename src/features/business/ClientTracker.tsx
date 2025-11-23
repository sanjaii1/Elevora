import { motion } from "framer-motion";
import { Users, Mail, Clock } from "lucide-react";

export function ClientTracker() {
    const clients = [
        {
            id: "1",
            name: "TechStart Inc",
            contact: "Sarah Connor",
            email: "sarah@techstart.io",
            status: "Active",
            project: "Mobile App Redesign",
            deadline: "2 weeks",
            value: "$12,000",
        },
        {
            id: "2",
            name: "Global Solutions",
            contact: "Mike Ross",
            email: "mike@global.com",
            status: "Pending",
            project: "Website Migration",
            deadline: "1 month",
            value: "$8,500",
        },
    ];

    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 h-full transition-colors">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-500" />
                Client Projects
            </h3>

            <div className="space-y-4">
                {clients.map((client) => (
                    <motion.div
                        key={client.id}
                        layoutId={client.id}
                        className="border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-colors"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="font-bold text-slate-900 dark:text-white">{client.name}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${client.status === 'Active' ? 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400' : 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-400'
                                }`}>
                                {client.status}
                            </span>
                        </div>

                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{client.project}</p>

                        <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                            <div className="flex items-center gap-1">
                                <Mail className="w-3 h-3" />
                                {client.contact}
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {client.deadline}
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700">
                            <span className="font-bold text-slate-900 dark:text-white">{client.value}</span>
                            <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-sm font-medium">
                                View Details
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
