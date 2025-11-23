import { motion } from "framer-motion";
import { BookOpen, PlayCircle, CheckCircle2 } from "lucide-react";

interface Course {
    id: string;
    title: string;
    platform: string;
    progress: number;
    totalLessons: number;
    completedLessons: number;
    image: string;
}

export function CourseList() {
    const courses: Course[] = [
        {
            id: "1",
            title: "Advanced React Patterns",
            platform: "Frontend Masters",
            progress: 60,
            totalLessons: 20,
            completedLessons: 12,
            image: "bg-blue-500",
        },
        {
            id: "2",
            title: "System Design Interview",
            platform: "Educative",
            progress: 30,
            totalLessons: 50,
            completedLessons: 15,
            image: "bg-purple-500",
        },
        {
            id: "3",
            title: "Clean Code",
            platform: "Book",
            progress: 85,
            totalLessons: 12,
            completedLessons: 10,
            image: "bg-green-500",
        },
    ];

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-orange-500" />
                Active Learning
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <motion.div
                        key={course.id}
                        whileHover={{ y: -5 }}
                        className="group relative bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all"
                    >
                        <div className={`h-32 ${course.image} relative`}>
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                            <div className="absolute bottom-4 left-4 text-white">
                                <span className="text-xs font-medium bg-black/30 px-2 py-1 rounded-lg backdrop-blur-sm">
                                    {course.platform}
                                </span>
                            </div>
                        </div>

                        <div className="p-4">
                            <h4 className="font-bold text-slate-900 mb-1">{course.title}</h4>
                            <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                                <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                                <span>{course.progress}%</span>
                            </div>

                            <div className="w-full bg-slate-100 rounded-full h-2 mb-4">
                                <div
                                    className="bg-orange-500 h-2 rounded-full transition-all duration-500"
                                    style={{ width: `${course.progress}%` }}
                                />
                            </div>

                            <button className="w-full py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                                {course.progress === 100 ? (
                                    <>
                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                        Completed
                                    </>
                                ) : (
                                    <>
                                        <PlayCircle className="w-4 h-4" />
                                        Continue
                                    </>
                                )}
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
