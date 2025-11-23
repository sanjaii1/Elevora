import { motion } from "framer-motion";
import { MapPin, Calendar, Plane, Hotel, Utensils } from "lucide-react";

export function TravelPlanner() {
    const trips = [
        {
            id: "1",
            destination: "Tokyo, Japan",
            dates: "Apr 15 - Apr 25, 2025",
            daysLeft: 45,
            image: "bg-blue-500",
            itinerary: [
                { day: 1, activity: "Arrival & Check-in", type: "flight" },
                { day: 2, activity: "Shibuya Crossing & Shopping", type: "activity" },
                { day: 3, activity: "Sushi Making Class", type: "food" },
            ]
        }
    ];

    const getIcon = (type: string) => {
        switch (type) {
            case 'flight': return Plane;
            case 'hotel': return Hotel;
            case 'food': return Utensils;
            default: return MapPin;
        }
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Plane className="w-5 h-5 text-cyan-500" />
                Upcoming Trips
            </h3>

            <div className="space-y-6">
                {trips.map((trip) => (
                    <motion.div
                        key={trip.id}
                        layoutId={trip.id}
                        className="border border-slate-200 rounded-xl overflow-hidden"
                    >
                        <div className={`h-32 ${trip.image} relative p-6 flex flex-col justify-end`}>
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="relative z-10 text-white">
                                <h4 className="text-xl font-bold">{trip.destination}</h4>
                                <div className="flex items-center gap-2 text-sm opacity-90">
                                    <Calendar className="w-4 h-4" />
                                    <span>{trip.dates}</span>
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white">
                                {trip.daysLeft} days left
                            </div>
                        </div>

                        <div className="p-4 bg-slate-50">
                            <h5 className="text-sm font-bold text-slate-900 mb-3">Itinerary Preview</h5>
                            <div className="space-y-3">
                                {trip.itinerary.map((item, i) => {
                                    const Icon = getIcon(item.type);
                                    return (
                                        <div key={i} className="flex items-center gap-3 text-sm">
                                            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-slate-400 border border-slate-200">
                                                <span className="text-[10px] font-bold">{item.day}</span>
                                            </div>
                                            <Icon className="w-4 h-4 text-slate-400" />
                                            <span className="text-slate-600">{item.activity}</span>
                                        </div>
                                    );
                                })}
                            </div>
                            <button className="w-full mt-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                                View Full Itinerary
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
