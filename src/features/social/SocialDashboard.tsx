
import { Plus } from "lucide-react";
import { ContactList } from "./ContactList";

export function SocialDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Network & Relationships</h1>
                    <p className="text-slate-500">Stay connected with friends, family, and professional contacts.</p>
                </div>
                <button className="px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add Contact
                </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <ContactList />
            </div>
        </div>
    );
}
