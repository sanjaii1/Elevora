import { Briefcase, Award, GraduationCap } from "lucide-react";

export function CareerTimeline() {
    const events = [
        {
            year: "2025",
            title: "Senior Engineer",
            company: "Tech Corp",
            type: "work",
            current: true,
        },
        {
            year: "2023",
            title: "Full Stack Dev",
            company: "Startup Inc",
            type: "work",
            current: false,
        },
        {
            year: "2022",
            title: "AWS Certified",
            company: "Solutions Architect",
            type: "cert",
            current: false,
        },
        {
            year: "2020",
            title: "BS Computer Science",
            company: "University",
            type: "edu",
            current: false,
        },
    ];

    const getIcon = (type: string) => {
        switch (type) {
            case 'work': return Briefcase;
            case 'cert': return Award;
            case 'edu': return GraduationCap;
            default: return Briefcase;
        }
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Career Timeline</h3>

            <div className="relative pl-4 border-l-2 border-slate-100 space-y-8">
                {events.map((event, i) => {
                    const Icon = getIcon(event.type);
                    return (
                        <div key={i} className="relative">
                            <div className={`absolute -left-[25px] top-0 w-10 h-10 rounded-full border-4 border-white flex items-center justify-center ${event.current ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                                <Icon className="w-4 h-4" />
                            </div>

                            <div className="pt-1">
                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${event.current ? 'bg-purple-100 text-purple-700' : 'bg-slate-100 text-slate-500'}`}>
                                    {event.year}
                                </span>
                                <h4 className="text-base font-bold text-slate-900 mt-2">{event.title}</h4>
                                <p className="text-sm text-slate-500">{event.company}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
                <h4 className="text-sm font-bold text-slate-900 mb-3">Skills Roadmap</h4>
                <div className="space-y-3">
                    {[
                        { skill: "System Design", progress: 60 },
                        { skill: "GraphQL", progress: 85 },
                        { skill: "Rust", progress: 20 },
                    ].map((item, i) => (
                        <div key={i}>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="font-medium text-slate-700">{item.skill}</span>
                                <span className="text-slate-500">{item.progress}%</span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-1.5">
                                <div
                                    className="bg-purple-500 h-1.5 rounded-full"
                                    style={{ width: `${item.progress}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
