import { Plus } from "lucide-react";
import { MedicalRecords } from "./MedicalRecords";
import { PrescriptionList } from "./PrescriptionList";
import { DoctorContacts } from "./DoctorContacts";
import { EmergencyInfo } from "./EmergencyInfo";

export function HealthDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Health Records</h1>
                    <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">Manage your medical information and health data.</p>
                </div>
                <button className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors flex items-center gap-2 justify-center sm:justify-start">
                    <Plus className="w-4 h-4" />
                    Add Record
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <MedicalRecords />
                    <PrescriptionList />
                </div>
                <div className="space-y-6">
                    <EmergencyInfo />
                    <DoctorContacts />
                </div>
            </div>
        </div>
    );
}
