import React, { useState, useEffect } from 'react';
import { Bell, Clock, ShieldAlert, ChevronRight, Activity } from 'lucide-react';
import { verificationService } from '../services/api';

const AlertsCenter = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await verificationService.getAlerts();
        setAlerts(data);
      } catch (error) {
        console.error('Failed to fetch alerts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  const getRiskClass = (level) => {
    switch (level) {
      case 'High': return 'bg-red-400/20 text-red-400 border-red-400/30';
      case 'Medium': return 'bg-amber-400/20 text-amber-400 border-amber-400/30';
      case 'Low': return 'bg-blue-400/20 text-blue-400 border-blue-400/30';
      default: return 'bg-gray-400/20 text-gray-400 border-gray-400/30';
    }
  };

  if (loading) return <div className="h-96 bg-panel/30 animate-pulse rounded-2xl" />;

  return (
    <div className="panel-bg p-6 rounded-2xl neon-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold flex items-center gap-3">
          Alerts <span className="text-acid italic">Center</span>
        </h2>
        <div className="relative">
          <Bell className="text-acid" size={20} />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-panel animate-ping" />
        </div>
      </div>

      <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
        {alerts.map((alert, idx) => (
          <div key={idx} className={`p-4 rounded-xl border transition-all hover:translate-x-1 group ${getRiskClass(alert.riskLevel)}`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest font-mono opacity-80">{alert.riskLevel} Risk</span>
              <div className="flex items-center gap-1.5 text-[10px] opacity-60 font-mono">
                <Clock size={10} />
                {alert.time}
              </div>
            </div>
            
            <p className="text-xs font-medium mb-3 leading-relaxed">{alert.message}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[10px] font-mono opacity-80">
                <Activity size={10} />
                {alert.actionTaken}
              </div>
              <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsCenter;
