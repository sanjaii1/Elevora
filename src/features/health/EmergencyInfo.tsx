import { AlertCircle, Droplet, Phone, User } from "lucide-react";

export function EmergencyInfo() {
    const emergencyData = {
        bloodType: "O+",
        allergies: ["Penicillin", "Peanuts"],
        chronicConditions: ["Hypertension"],
        emergencyContacts: [
            { name: "Jane Doe", relation: "Spouse", phone: "+1 (555) 111-2222" },
            { name: "John Doe Sr.", relation: "Father", phone: "+1 (555) 333-4444" }
        ]
    };

    return (
        <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 md:p-6 rounded-2xl shadow-sm border border-red-100">
            <h3 className="text-lg font-bold text-slate-900 mb-4 md:mb-6 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                Emergency Information
            </h3>

            <div className="space-y-4">
                {/* Blood Type */}
                <div className="bg-white p-3 md:p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                        <Droplet className="w-4 h-4 text-red-500" />
                        <span className="text-xs md:text-sm font-bold text-slate-700">Blood Type</span>
                    </div>
                    <p className="text-lg md:text-2xl font-bold text-red-600">{emergencyData.bloodType}</p>
                </div>

                {/* Allergies */}
                <div className="bg-white p-3 md:p-4 rounded-xl">
                    <p className="text-xs md:text-sm font-bold text-slate-700 mb-2">Allergies</p>
                    <div className="flex flex-wrap gap-2">
                        {emergencyData.allergies.map((allergy, i) => (
                            <span key={i} className="text-xs md:text-sm bg-red-100 text-red-700 px-2 md:px-3 py-1 rounded-full font-medium">
                                {allergy}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Chronic Conditions */}
                <div className="bg-white p-3 md:p-4 rounded-xl">
                    <p className="text-xs md:text-sm font-bold text-slate-700 mb-2">Chronic Conditions</p>
                    <div className="flex flex-wrap gap-2">
                        {emergencyData.chronicConditions.map((condition, i) => (
                            <span key={i} className="text-xs md:text-sm bg-orange-100 text-orange-700 px-2 md:px-3 py-1 rounded-full font-medium">
                                {condition}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Emergency Contacts */}
                <div className="bg-white p-3 md:p-4 rounded-xl">
                    <p className="text-xs md:text-sm font-bold text-slate-700 mb-3">Emergency Contacts</p>
                    <div className="space-y-2 md:space-y-3">
                        {emergencyData.emergencyContacts.map((contact, i) => (
                            <div key={i} className="flex items-start gap-2 md:gap-3">
                                <User className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs md:text-sm font-medium text-slate-900">{contact.name}</p>
                                    <p className="text-xs text-slate-500">{contact.relation}</p>
                                    <a href={`tel:${contact.phone}`} className="text-xs md:text-sm text-blue-600 hover:underline flex items-center gap-1 mt-1">
                                        <Phone className="w-3 h-3" />
                                        {contact.phone}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
