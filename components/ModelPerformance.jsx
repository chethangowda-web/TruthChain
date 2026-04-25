import React, { useState, useEffect } from 'react';
import { Target, TrendingUp, Zap, ShieldAlert, BarChart } from 'lucide-react';
import { verificationService } from '../services/api';

const ModelPerformance = () => {
  const [performance, setPerformance] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await verificationService.getModelPerformance();
        setPerformance(data);
      } catch (error) {
        console.error('Failed to fetch performance:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const metrics = performance ? [
    { icon: Target, label: 'Accuracy', value: performance.accuracy, color: 'text-acid' },
    { icon: TrendingUp, label: 'Precision', value: performance.precision, color: 'text-blue-400' },
    { icon: Zap, label: 'Recall', value: performance.recall, color: 'text-purple-400' },
    { icon: ShieldAlert, label: 'FPR', value: performance.falsePositiveRate, color: 'text-red-400' },
    { icon: BarChart, label: 'Predictions', value: performance.totalPredictions.toLocaleString(), color: 'text-amber-400', isCount: true },
  ] : [];

  if (loading) return <div className="h-32 bg-panel/30 animate-pulse rounded-2xl" />;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {metrics.map((metric, idx) => (
        <div key={idx} className="panel-bg p-4 rounded-2xl neon-border group">
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors ${metric.color}`}>
              <metric.icon size={18} />
            </div>
            <span className="text-xs text-gray-500 uppercase tracking-widest font-mono font-bold">{metric.label}</span>
          </div>
          <div className="text-2xl font-bold tracking-tight">
            {metric.value}{!metric.isCount && <span className="text-sm ml-0.5 opacity-50">%</span>}
          </div>
          {!metric.isCount && (
            <div className="mt-2 h-1 bg-void rounded-full overflow-hidden">
              <div 
                className={`h-full bg-current transition-all duration-1000 ${metric.color}`}
                style={{ width: `${metric.value}%` }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ModelPerformance;
