import { motion } from "framer-motion";
import { User } from "lucide-react";
import { HabitTracker } from "./HabitTracker";
import { MoodLog } from "./MoodLog";

export function PersonalDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Personal Hub</h1>
                    <p className="text-slate-500">Track your life, habits, and well-being.</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                    Edit Profile
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Profile Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 md:col-span-1 h-full"
                >
                    <div className="flex flex-col items-center text-center h-full justify-center">
                        <div className="w-24 h-24 bg-slate-200 rounded-full mb-4 flex items-center justify-center relative group cursor-pointer">
                            <User className="w-10 h-10 text-slate-400" />
                            <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium">
                                Change
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900">User Name</h2>
                        <p className="text-slate-500 mb-6">Software Engineer</p>
                        <div className="flex gap-2 w-full">
                            <div className="flex-1 p-3 bg-slate-50 rounded-xl">
                                <div className="text-2xl font-bold text-blue-600">85%</div>
                                <div className="text-xs text-slate-500">Energy</div>
                            </div>
                            <div className="flex-1 p-3 bg-slate-50 rounded-xl">
                                <div className="text-2xl font-bold text-green-600">Good</div>
                                <div className="text-xs text-slate-500">Mood</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Habits Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="md:col-span-2"
                >
                    <HabitTracker />
                </motion.div>

                {/* Mood & Health */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-3"
                >
                    <MoodLog />
                </motion.div>
            </div>
        </div>
    );
}
