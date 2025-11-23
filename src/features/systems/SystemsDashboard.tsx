
import { Plus } from "lucide-react";
import { DeviceManager } from "./DeviceManager";
import { VaultList } from "./VaultList";

export function SystemsDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">System Control</h1>
                    <p className="text-slate-500">Manage your devices, assets, and secure documents.</p>
                </div>
                <button className="px-4 py-2 bg-slate-800 text-white rounded-xl hover:bg-slate-900 transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add Asset
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <DeviceManager />
                <VaultList />
            </div>
        </div>
    );
}
