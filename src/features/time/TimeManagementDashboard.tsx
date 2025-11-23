import { PomodoroTimer } from "./PomodoroTimer";
import { TimeBlockList } from "./TimeBlockList";
import { TimeAnalytics } from "./TimeAnalytics";

export function TimeManagementDashboard() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Time Management</h1>
                <p className="text-sm md:text-base text-slate-500 mt-1">Master your schedule and boost productivity.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Timer & Analytics */}
                <div className="space-y-6">
                    <PomodoroTimer />
                    <TimeAnalytics />
                </div>

                {/* Right Column - Schedule/Time Blocking */}
                <div className="lg:col-span-2">
                    <TimeBlockList />
                </div>
            </div>
        </div>
    );
}
