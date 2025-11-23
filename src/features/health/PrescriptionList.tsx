import { Pill, Clock, Calendar } from "lucide-react";

export function PrescriptionList() {
    const prescriptions = [
        {
            id: "1",
            medication: "Lisinopril",
            dosage: "10mg",
            frequency: "Once daily",
            prescribedBy: "Dr. Sarah Johnson",
            startDate: "Jan 15, 2024",
            refillDate: "Dec 15, 2024",
            active: true
        },
        {
            id: "2",
            medication: "Vitamin D3",
            dosage: "2000 IU",
            frequency: "Once daily",
            prescribedBy: "Dr. Sarah Johnson",
            startDate: "Mar 10, 2024",
            refillDate: "Jan 10, 2025",
            active: true
        },
        {
            id: "3",
            medication: "Amoxicillin",
            dosage: "500mg",
            frequency: "Three times daily",
            prescribedBy: "Dr. Mike Chen",
            startDate: "Oct 1, 2024",
            refillDate: "Oct 10, 2024",
            active: false
        }
    ];

    return (
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-4 md:mb-6 flex items-center gap-2">
                <Pill className="w-5 h-5 text-blue-500" />
                Prescriptions & Medications
            </h3>

            <div className="space-y-3">
                {prescriptions.map((rx) => (
                    <div
                        key={rx.id}
                        className={`border rounded-xl p-3 md:p-4 transition-colors ${rx.active
                                ? 'border-blue-200 bg-blue-50/30'
                                : 'border-slate-200 bg-slate-50 opacity-60'
                            }`}
                    >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-bold text-slate-900 text-sm md:text-base">{rx.medication}</h4>
                                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${rx.active ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-600'
                                        }`}>
                                        {rx.active ? 'Active' : 'Completed'}
                                    </span>
                                </div>
                                <p className="text-xs md:text-sm text-slate-600">{rx.dosage} - {rx.frequency}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-3 h-3 text-slate-400" />
                                <span>Started: {rx.startDate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-3 h-3 text-slate-400" />
                                <span>Refill: {rx.refillDate}</span>
                            </div>
                        </div>

                        <p className="text-xs text-slate-500 mt-2">Prescribed by {rx.prescribedBy}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
