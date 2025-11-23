import { FileText, Calendar, User } from "lucide-react";

export function MedicalRecords() {
    const records = [
        {
            id: "1",
            type: "Diagnosis",
            title: "Annual Physical Exam",
            doctor: "Dr. Sarah Johnson",
            date: "Nov 15, 2024",
            notes: "All vitals normal. Blood pressure: 120/80",
            category: "Checkup"
        },
        {
            id: "2",
            type: "Procedure",
            title: "Dental Cleaning",
            doctor: "Dr. Mike Chen",
            date: "Oct 20, 2024",
            notes: "No cavities found. Good oral health.",
            category: "Dental"
        },
        {
            id: "3",
            type: "Lab Result",
            title: "Blood Test - Complete Panel",
            doctor: "Dr. Sarah Johnson",
            date: "Sep 10, 2024",
            notes: "Cholesterol: 180 mg/dL, Glucose: 95 mg/dL - Normal",
            category: "Lab"
        }
    ];

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'Checkup': return 'bg-blue-100 text-blue-700';
            case 'Dental': return 'bg-purple-100 text-purple-700';
            case 'Lab': return 'bg-green-100 text-green-700';
            default: return 'bg-slate-100 text-slate-700';
        }
    };

    return (
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-4 md:mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-red-500" />
                Medical Records
            </h3>

            <div className="space-y-3 md:space-y-4">
                {records.map((record) => (
                    <div key={record.id} className="border border-slate-200 rounded-xl p-3 md:p-4 hover:border-red-200 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-bold text-slate-900 text-sm md:text-base">{record.title}</h4>
                                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getCategoryColor(record.category)}`}>
                                        {record.category}
                                    </span>
                                </div>
                                <p className="text-xs md:text-sm text-slate-500">{record.type}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-slate-600 mb-3">
                            <div className="flex items-center gap-2">
                                <User className="w-3 h-3 md:w-4 md:h-4 text-slate-400" />
                                <span>{record.doctor}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-3 h-3 md:w-4 md:h-4 text-slate-400" />
                                <span>{record.date}</span>
                            </div>
                        </div>

                        <p className="text-xs md:text-sm text-slate-600 bg-slate-50 p-2 md:p-3 rounded-lg">
                            {record.notes}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
