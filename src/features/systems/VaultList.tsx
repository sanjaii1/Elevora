import { Shield, FileText, Key, ExternalLink, Lock } from "lucide-react";

export function VaultList() {
    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 h-full transition-colors">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-500" />
                Secure Vaults
            </h3>

            <div className="space-y-6">
                <div>
                    <h4 className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-3 flex items-center gap-2">
                        <Key className="w-4 h-4 text-slate-400" />
                        Password Managers
                    </h4>
                    <div className="space-y-2">
                        {[
                            { name: "1Password", url: "https://1password.com" },
                            { name: "LastPass", url: "https://lastpass.com" },
                        ].map((item, i) => (
                            <a
                                key={i}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/30 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-colors group border border-transparent dark:border-slate-700"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white dark:bg-slate-600 rounded-lg text-slate-400 dark:text-slate-300 group-hover:text-blue-500 dark:group-hover:text-blue-400">
                                        <Lock className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium text-slate-700 dark:text-slate-200">{item.name}</span>
                                </div>
                                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-3 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-slate-400" />
                        Document Storage
                    </h4>
                    <div className="space-y-2">
                        {[
                            { name: "Google Drive", url: "https://drive.google.com" },
                            { name: "Dropbox", url: "https://dropbox.com" },
                            { name: "Notion", url: "https://notion.so" },
                        ].map((item, i) => (
                            <a
                                key={i}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/30 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-colors group border border-transparent dark:border-slate-700"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white dark:bg-slate-600 rounded-lg text-slate-400 dark:text-slate-300 group-hover:text-blue-500 dark:group-hover:text-blue-400">
                                        <FileText className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium text-slate-700 dark:text-slate-200">{item.name}</span>
                                </div>
                                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
