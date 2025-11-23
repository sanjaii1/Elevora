import { motion } from "framer-motion";
import { Plane, MapPin, Activity } from "lucide-react";

export function LifestyleWidget() {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-cyan-100 text-cyan-600 rounded-lg">
                        <Plane className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Lifestyle</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-1">Next Trip</h3>
                <p className="text-sm text-slate-500 mb-4">Japan in 45 days 🌸</p>

                <div className="space-y-3">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-2 mb-2">
                            <MapPin className="w-4 h-4 text-cyan-500" />
                            <span className="text-sm font-medium text-slate-900">Tokyo, Japan</span>
                        </div>
                        <div className="flex justify-between text-xs text-slate-500">
                            <span>Apr 15 - Apr 25</span>
                            <span>10 Days</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-orange-500" />
                            <span className="text-sm font-medium text-slate-700">Fitness</span>
                        </div>
                        <span className="text-xs font-bold bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                            On Track
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
