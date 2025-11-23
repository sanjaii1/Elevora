import { motion } from "framer-motion";
import { Briefcase, Clock, CheckSquare } from "lucide-react";

export function CareerWidget() {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                        <Briefcase className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Career</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-1">Active Projects</h3>
                <p className="text-sm text-slate-500 mb-4">3 projects in progress</p>

                <div className="space-y-3">
                    {[
                        { name: "Website Redesign", due: "2 days left", progress: 75 },
                        { name: "Mobile App API", due: "1 week left", progress: 40 },
                    ].map((project, i) => (
                        <div key={i}>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="font-medium text-slate-700">{project.name}</span>
                                <span className="text-slate-500">{project.due}</span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-1.5">
                                <div
                                    className="bg-purple-500 h-1.5 rounded-full"
                                    style={{ width: `${project.progress}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
