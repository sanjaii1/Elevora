import { motion } from "framer-motion";
import { PersonalWidget } from "../../components/widgets/PersonalWidget";
import { CareerWidget } from "../../components/widgets/CareerWidget";
import { FinanceWidget } from "../../components/widgets/FinanceWidget";
import { LearningWidget } from "../../components/widgets/LearningWidget";
import { DevelopmentWidget } from "../../components/widgets/DevelopmentWidget";
import { LifestyleWidget } from "../../components/widgets/LifestyleWidget";
import { SystemsWidget } from "../../components/widgets/SystemsWidget";
import { SocialWidget } from "../../components/widgets/SocialWidget";
import { BusinessWidget } from "../../components/widgets/BusinessWidget";
import { TodoWidget } from "../../components/widgets/TodoWidget";
import { HealthWidget } from "../../components/widgets/HealthWidget";
import { TimeManagementWidget } from "../../components/widgets/TimeManagementWidget";

export function MainDashboard() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="space-y-6 md:space-y-8">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Welcome back, User</h1>
                <p className="text-sm md:text-base text-slate-500 mt-1 md:mt-2">Here's what's happening in your life today.</p>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <motion.div variants={item}><TodoWidget /></motion.div>
                <motion.div variants={item}><TimeManagementWidget /></motion.div>
                <motion.div variants={item}><HealthWidget /></motion.div>
                <motion.div variants={item}><PersonalWidget /></motion.div>
                <motion.div variants={item}><CareerWidget /></motion.div>
                <motion.div variants={item}><FinanceWidget /></motion.div>
                <motion.div variants={item}><LearningWidget /></motion.div>
                <motion.div variants={item}><DevelopmentWidget /></motion.div>
                <motion.div variants={item}><LifestyleWidget /></motion.div>
                <motion.div variants={item}><SystemsWidget /></motion.div>
                <motion.div variants={item}><SocialWidget /></motion.div>
                <motion.div variants={item}><BusinessWidget /></motion.div>
            </motion.div>
        </div>
    );
}
