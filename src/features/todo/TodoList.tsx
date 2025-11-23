import { useState } from "react";
import { CheckCircle2, Circle, Trash2, Flag } from "lucide-react";
import { motion } from "framer-motion";

interface Todo {
    id: string;
    text: string;
    completed: boolean;
    priority: "low" | "medium" | "high";
    category: string;
}

export function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([
        { id: "1", text: "Review project proposal", completed: false, priority: "high", category: "Work" },
        { id: "2", text: "Call dentist for appointment", completed: false, priority: "medium", category: "Personal" },
        { id: "3", text: "Buy groceries", completed: true, priority: "low", category: "Personal" },
        { id: "4", text: "Finish React course module", completed: false, priority: "high", category: "Learning" },
        { id: "5", text: "Update portfolio website", completed: false, priority: "medium", category: "Work" },
    ]);

    const toggleTodo = (id: string) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'high': return 'text-red-500';
            case 'medium': return 'text-orange-500';
            case 'low': return 'text-blue-500';
            default: return 'text-slate-500';
        }
    };

    const categories = ["All", "Work", "Personal", "Learning"];
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredTodos = activeCategory === "All"
        ? todos
        : todos.filter(todo => todo.category === activeCategory);

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-6 overflow-x-auto">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${activeCategory === category
                                ? "bg-emerald-500 text-white"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="space-y-3">
                {filteredTodos.map((todo) => (
                    <motion.div
                        key={todo.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
                    >
                        <button
                            onClick={() => toggleTodo(todo.id)}
                            className="flex-shrink-0"
                        >
                            {todo.completed ? (
                                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                            ) : (
                                <Circle className="w-6 h-6 text-slate-300 hover:text-emerald-500 transition-colors" />
                            )}
                        </button>

                        <div className="flex-1 min-w-0">
                            <p className={`font-medium ${todo.completed ? "text-slate-400 line-through" : "text-slate-900"}`}>
                                {todo.text}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs bg-white px-2 py-0.5 rounded-full text-slate-600">
                                    {todo.category}
                                </span>
                            </div>
                        </div>

                        <Flag className={`w-4 h-4 ${getPriorityColor(todo.priority)} flex-shrink-0`} />

                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </motion.div>
                ))}
            </div>

            {filteredTodos.length === 0 && (
                <div className="text-center py-12 text-slate-400">
                    <CheckCircle2 className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No tasks in this category</p>
                </div>
            )}
        </div>
    );
}
