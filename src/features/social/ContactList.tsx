import { motion } from "framer-motion";
import { Phone, Mail, Calendar, MoreHorizontal, Star } from "lucide-react";

export function ContactList() {
    const contacts = [
        {
            id: "1",
            name: "John Doe",
            role: "Friend",
            email: "john@example.com",
            phone: "+1 234 567 890",
            birthday: "Tomorrow",
            lastContact: "2 days ago",
            starred: true,
            image: "bg-blue-200",
        },
        {
            id: "2",
            name: "Alice Smith",
            role: "Colleague",
            email: "alice@work.com",
            phone: "+1 987 654 321",
            birthday: "Aug 15",
            lastContact: "1 week ago",
            starred: false,
            image: "bg-pink-200",
        },
        {
            id: "3",
            name: "Bob Wilson",
            role: "Mentor",
            email: "bob@tech.com",
            phone: "+1 555 000 111",
            birthday: "Dec 01",
            lastContact: "3 days ago",
            starred: true,
            image: "bg-purple-200",
        },
    ];

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full">
            <h3 className="text-lg font-bold text-slate-900 mb-6">All Contacts</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {contacts.map((contact) => (
                    <motion.div
                        key={contact.id}
                        layoutId={contact.id}
                        className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow group relative bg-white"
                    >
                        <button className="absolute top-4 right-4 text-slate-300 hover:text-slate-500">
                            <MoreHorizontal className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-4 mb-4">
                            <div className={`w-12 h-12 rounded-full ${contact.image} flex items-center justify-center text-slate-600 font-bold text-lg`}>
                                {contact.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                    {contact.name}
                                    {contact.starred && <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />}
                                </h4>
                                <span className="text-xs font-medium bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
                                    {contact.role}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-2 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <span className="truncate">{contact.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                <span>{contact.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-pink-500" />
                                <span className={contact.birthday === 'Tomorrow' ? 'text-pink-600 font-bold' : ''}>
                                    {contact.birthday}
                                </span>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
                            <span>Last contacted: {contact.lastContact}</span>
                            <button className="text-blue-600 hover:underline font-medium">Message</button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
