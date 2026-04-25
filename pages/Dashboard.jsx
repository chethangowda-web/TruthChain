import React from 'react';
import Sidebar from '../components/Sidebar';
import ModelPerformance from '../components/ModelPerformance';
import VerificationLogs from '../components/VerificationLogs';
import AlertsCenter from '../components/AlertsCenter';
import DataInsights from '../components/DataInsights';
import SystemHealth from '../components/SystemHealth';
import ExportPanel from '../components/ExportPanel';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-void text-white">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            Verification <span className="text-acid italic">Dashboard</span>
          </h1>
          <p className="text-gray-400">Real-time content integrity & fraud detection monitoring</p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          <div className="xl:col-span-2 space-y-6">
            <ModelPerformance />
            <VerificationLogs />
            <DataInsights />
          </div>
          <div className="space-y-6">
            <SystemHealth />
            <AlertsCenter />
            <ExportPanel />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
