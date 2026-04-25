import React from 'react';
import { FileText, FileSpreadsheet, CalendarRange, Download } from 'lucide-react';
import { verificationService } from '../services/api';

const ExportPanel = () => {
  const handleExport = async (type) => {
    try {
      const { data } = type === 'pdf' 
        ? await verificationService.exportPdf() 
        : await verificationService.exportCsv();
      
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `verification_report_${new Date().getTime()}.${type}`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Export failed:', error);
    }
  };

  return (
    <div className="panel-bg p-6 rounded-2xl neon-border">
      <h2 className="text-xl font-bold flex items-center gap-3 mb-6">
        Export <span className="text-acid italic">Reports</span>
      </h2>

      <div className="grid grid-cols-1 gap-3">
        <button 
          onClick={() => handleExport('pdf')}
          className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-acid/30 transition-all group"
        >
          <div className="flex items-center gap-3 text-red-400">
            <FileText size={18} />
            <span className="text-sm font-medium text-white">Export as PDF</span>
          </div>
          <Download size={16} className="text-gray-600 group-hover:text-acid" />
        </button>

        <button 
          onClick={() => handleExport('csv')}
          className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-acid/30 transition-all group"
        >
          <div className="flex items-center gap-3 text-green-400">
            <FileSpreadsheet size={18} />
            <span className="text-sm font-medium text-white">Export as CSV</span>
          </div>
          <Download size={16} className="text-gray-600 group-hover:text-acid" />
        </button>

        <button className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-acid/30 transition-all group">
          <div className="flex items-center gap-3 text-blue-400">
            <CalendarRange size={18} />
            <span className="text-sm font-medium text-white">Monthly Report</span>
          </div>
          <Download size={16} className="text-gray-600 group-hover:text-acid" />
        </button>
      </div>
    </div>
  );
};

export default ExportPanel;
