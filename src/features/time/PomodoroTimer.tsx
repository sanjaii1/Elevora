import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Coffee, Brain } from "lucide-react";
import { motion } from "framer-motion";

export function PomodoroTimer() {
    const [isActive, setIsActive] = useState(false);
    const [mode, setMode] = useState<'focus' | 'break'>('focus');
    const [timeLeft, setTimeLeft] = useState(25 * 60);

    useEffect(() => {
        let interval: number | undefined;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
            // Play sound or notification here
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const toggleTimer = () => setIsActive(!isActive);

    const setTimerMode = (newMode: 'focus' | 'break') => {
        setMode(newMode);
        setIsActive(false);
        setTimeLeft(newMode === 'focus' ? 25 * 60 : 5 * 60);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const progress = mode === 'focus'
        ? ((25 * 60 - timeLeft) / (25 * 60)) * 100
        : ((5 * 60 - timeLeft) / (5 * 60)) * 100;

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Brain className="w-5 h-5 text-indigo-500" />
                Focus Timer
            </h3>

            <div className="flex justify-center gap-2 mb-8">
                <button
                    onClick={() => setTimerMode('focus')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${mode === 'focus'
                            ? 'bg-indigo-100 text-indigo-700'
                            : 'text-slate-500 hover:bg-slate-50'
                        }`}
                >
                    Focus
                </button>
                <button
                    onClick={() => setTimerMode('break')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${mode === 'break'
                            ? 'bg-green-100 text-green-700'
                            : 'text-slate-500 hover:bg-slate-50'
                        }`}
                >
                    Break
                </button>
            </div>

            <div className="relative w-48 h-48 mx-auto mb-8">
                {/* Circular Progress Background */}
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        className="text-slate-100"
                    />
                    <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 88}
                        strokeDashoffset={2 * Math.PI * 88 * (1 - progress / 100)}
                        className={`${mode === 'focus' ? 'text-indigo-500' : 'text-green-500'} transition-all duration-1000 ease-linear`}
                        strokeLinecap="round"
                    />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-slate-900 font-mono">
                        {formatTime(timeLeft)}
                    </span>
                    <span className="text-sm text-slate-500 mt-1 capitalize">
                        {isActive ? 'Running' : 'Paused'}
                    </span>
                </div>
            </div>

            <div className="flex justify-center gap-4">
                <button
                    onClick={toggleTimer}
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${isActive
                            ? 'bg-amber-100 text-amber-600 hover:bg-amber-200'
                            : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200'
                        }`}
                >
                    {isActive ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                </button>
                <button
                    onClick={() => setTimerMode(mode)}
                    className="w-14 h-14 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition-colors"
                >
                    <RotateCcw className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
