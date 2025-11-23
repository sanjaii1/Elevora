import { Smartphone, Laptop, Tablet, Watch, Battery } from "lucide-react";

export function DeviceManager() {
    const devices = [
        { name: "MacBook Pro", type: "laptop", battery: 85, status: "online", lastSync: "2 mins ago" },
        { name: "iPhone 15", type: "phone", battery: 42, status: "online", lastSync: "Just now" },
        { name: "iPad Air", type: "tablet", battery: 90, status: "offline", lastSync: "2 hours ago" },
        { name: "Apple Watch", type: "watch", battery: 15, status: "online", lastSync: "5 mins ago" },
    ];

    const getIcon = (type: string) => {
        switch (type) {
            case 'laptop': return Laptop;
            case 'phone': return Smartphone;
            case 'tablet': return Tablet;
            case 'watch': return Watch;
            default: return Smartphone;
        }
    };

    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 h-full transition-colors">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                Device Inventory
            </h3>

            <div className="space-y-4">
                {devices.map((device, i) => {
                    const Icon = getIcon(device.type);
                    return (
                        <div key={i} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/30 rounded-xl border border-slate-100 dark:border-slate-600 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white dark:bg-slate-600 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-300 shadow-sm">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white">{device.name}</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Synced: {device.lastSync}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                                    <Battery className={`w-4 h-4 ${device.battery < 20 ? 'text-red-500' : 'text-green-500'}`} />
                                    {device.battery}%
                                </div>
                                <div className={`w-2 h-2 rounded-full ${device.status === 'online' ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-500'}`} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
