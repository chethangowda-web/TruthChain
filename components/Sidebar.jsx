import React from 'react';
import { LayoutDashboard, FileCheck, Bell, BarChart3, Activity, FileDown } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: FileCheck, label: 'Verifications' },
    { icon: Bell, label: 'Alerts' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Activity, label: 'System Health' },
    { icon: FileDown, label: 'Reports' },
  ];

  return (
    <aside className="w-64 bg-panel border-r border-white/5 p-6 flex flex-col h-screen sticky top-0">
      <div className="text-2xl font-bold mb-10">
        <span className="text-acid">Truth</span>Chain
      </div>
      
      <nav className="flex-1 space-y-2">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
              item.active 
                ? 'bg-acid/10 text-acid border border-acid/20 shadow-[0_0_15px_rgba(200,255,0,0.1)]' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto p-4 rounded-xl bg-void/50 border border-white/5 text-xs text-gray-500">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-500">Node Connected</span>
        </div>
        <div>v2.1.0-prod</div>
      </div>
    </aside>
  );
};

export default Sidebar;
