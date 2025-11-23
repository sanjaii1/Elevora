import { motion } from "framer-motion";
import { Clock, Play, Pause, RotateCcw } from "lucide-react";
import { useState, useEffect } from "react";

export function TimeManagementWidget() {
    const [isActive, setIsActive] = useState(false);
    const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds

    useEffect(() => {
        let interval: number | undefined;

        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
        }

        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const toggleTimer = () => setIsActive(!isActive);
    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(25 * 60);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                        <Clock className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Focus</span>
                </div>

                <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-slate-900 font-mono tracking-wider">
                        {formatTime(timeLeft)}
                    </div>
                    <p className="text-sm text-slate-500 mt-1">Pomodoro Timer</p>
                </div>

                <div className="flex items-center justify-center gap-3">
                    <button
                        onClick={toggleTimer}
                        className={`p-3 rounded-xl transition-colors ${isActive
                                ? 'bg-amber-100 text-amber-600 hover:bg-amber-200'
                                : 'bg-indigo-600 text-white hover:bg-indigo-700'
                            }`}
                    >
                        {isActive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                    <button
                        onClick={resetTimer}
                        className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-colors"
                    >
                        <RotateCcw className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
