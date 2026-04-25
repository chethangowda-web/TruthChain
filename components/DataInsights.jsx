import React, { useState, useEffect } from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from 'chart.js';
import { verificationService } from '../services/api';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DataInsights = () => {
  const [dailyData, setDailyData] = useState(null);
  const [verdictData, setVerdictData] = useState(null);
  const [fakeTrendData, setFakeTrendData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [daily, verdict, trend] = await Promise.all([
          verificationService.getDailyStats(),
          verificationService.getVerdictStats(),
          verificationService.getFakeTrendStats()
        ]);
        setDailyData(daily.data);
        setVerdictData(verdict.data);
        setFakeTrendData(trend.data);
      } catch (error) {
        console.error('Failed to fetch chart data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: '#6b7280', font: { family: 'DM Mono', size: 10 } }
      }
    },
    scales: {
      x: { grid: { color: 'rgba(255,255,255,0.03)' }, ticks: { color: '#6b7280' } },
      y: { grid: { color: 'rgba(255,255,255,0.03)' }, ticks: { color: '#6b7280' } }
    }
  };

  if (loading) return <div className="h-64 bg-panel/30 animate-pulse rounded-2xl" />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="panel-bg p-6 rounded-2xl neon-border">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6 font-mono">Daily Scan Volume</h3>
        <div className="h-48">
          <Line 
            options={commonOptions}
            data={{
              labels: dailyData?.labels || [],
              datasets: [{
                label: 'Scans',
                data: dailyData?.values || [],
                borderColor: '#c8ff00',
                backgroundColor: 'rgba(200,255,0,0.05)',
                fill: true,
                tension: 0.4
              }]
            }}
          />
        </div>
      </div>

      <div className="panel-bg p-6 rounded-2xl neon-border">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6 font-mono">Verdict Distribution</h3>
        <div className="h-48 flex justify-center">
          <Doughnut 
            options={{
              ...commonOptions,
              scales: { x: { display: false }, y: { display: false } }
            }}
            data={{
              labels: ['Verified', 'Fake', 'Suspicious'],
              datasets: [{
                data: verdictData?.values || [60, 25, 15],
                backgroundColor: ['#22c55e', '#ff4444', '#f59e0b'],
                borderWidth: 0,
                hoverOffset: 10
              }]
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DataInsights;
