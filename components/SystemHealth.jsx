import React, { useState, useEffect } from 'react';
import { Server, Database, Timer, Globe } from 'lucide-react';
import { verificationService } from '../services/api';

const SystemHealth = () => {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await verificationService.getSystemHealth();
        setHealth(data);
      } catch (error) {
        console.error('Failed to fetch health:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="h-48 bg-panel/30 animate-pulse rounded-2xl" />;

  const items = [
    { icon: Server, label: 'Backend Server', value: health?.server, status: health?.server === 'Online' },
    { icon: Database, label: 'Database', value: health?.database, status: health?.database === 'Connected' },
    { icon: Timer, label: 'API Latency', value: health?.responseTime, status: true },
    { icon: Globe, label: 'System Uptime', value: health?.uptime, status: true },
  ];

  return (
    <div className="panel-bg p-6 rounded-2xl neon-border">
      <h2 className="text-xl font-bold flex items-center gap-3 mb-6">
        System <span className="text-acid italic">Health</span>
      </h2>

      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-void/50 border border-white/5">
            <div className="flex items-center gap-3">
              <div className={`p-1.5 rounded-lg bg-white/5 ${item.status ? 'text-acid' : 'text-red-500'}`}>
                <item.icon size={16} />
              </div>
              <span className="text-xs font-medium text-gray-400">{item.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${item.status ? 'text-white' : 'text-red-500'}`}>{item.value}</span>
              <div className={`w-1.5 h-1.5 rounded-full ${item.status ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-red-500 shadow-[0_0_8px_#ef4444]'}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemHealth;
