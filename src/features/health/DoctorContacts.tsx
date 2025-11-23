import { Phone, Mail, MapPin, Stethoscope } from "lucide-react";

export function DoctorContacts() {
    const doctors = [
        {
            id: "1",
            name: "Dr. Sarah Johnson",
            specialty: "Primary Care",
            phone: "+1 (555) 123-4567",
            email: "sjohnson@healthcare.com",
            address: "123 Medical Center Dr"
        },
        {
            id: "2",
            name: "Dr. Mike Chen",
            specialty: "Dentist",
            phone: "+1 (555) 234-5678",
            email: "mchen@dentalcare.com",
            address: "456 Dental Plaza"
        },
        {
            id: "3",
            name: "Dr. Emily Rodriguez",
            specialty: "Cardiologist",
            phone: "+1 (555) 345-6789",
            email: "erodriguez@heartcare.com",
            address: "789 Cardio Center"
        }
    ];

    return (
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-4 md:mb-6 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-purple-500" />
                Doctor Contacts
            </h3>

            <div className="space-y-3 md:space-y-4">
                {doctors.map((doctor) => (
                    <div key={doctor.id} className="border border-slate-200 rounded-xl p-3 md:p-4 hover:border-purple-200 transition-colors">
                        <div className="mb-3">
                            <h4 className="font-bold text-slate-900 text-sm md:text-base">{doctor.name}</h4>
                            <p className="text-xs md:text-sm text-purple-600 font-medium">{doctor.specialty}</p>
                        </div>

                        <div className="space-y-2 text-xs md:text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                                <Phone className="w-3 h-3 md:w-4 md:h-4 text-slate-400 flex-shrink-0" />
                                <a href={`tel:${doctor.phone}`} className="hover:text-purple-600 transition-colors">
                                    {doctor.phone}
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-3 h-3 md:w-4 md:h-4 text-slate-400 flex-shrink-0" />
                                <a href={`mailto:${doctor.email}`} className="hover:text-purple-600 transition-colors truncate">
                                    {doctor.email}
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-slate-400 flex-shrink-0" />
                                <span className="text-xs">{doctor.address}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
