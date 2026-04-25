import React, { useState, useEffect } from 'react';
import { Search, Filter, RotateCcw, ChevronLeft, ChevronRight, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { verificationService } from '../services/api';

const VerificationLogs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await verificationService.getVerifications();
        setLogs(data);
      } catch (error) {
        console.error('Failed to fetch logs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredLogs = logs.filter(log => {
    const matchesSearch = log.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          log.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || log.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Verified': return <CheckCircle2 size={16} className="text-green-400" />;
      case 'Fake': return <XCircle size={16} className="text-red-400" />;
      case 'Suspicious': return <AlertCircle size={16} className="text-amber-400" />;
      default: return null;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Verified': return 'bg-green-400/10 text-green-400 border-green-400/20';
      case 'Fake': return 'bg-red-400/10 text-red-400 border-red-400/20';
      case 'Suspicious': return 'bg-amber-400/10 text-amber-400 border-amber-400/20';
      default: return 'bg-gray-400/10 text-gray-400 border-gray-400/20';
    }
  };

  if (loading) return <div className="h-64 bg-panel/30 animate-pulse rounded-2xl" />;

  return (
    <div className="panel-bg p-6 rounded-2xl neon-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold flex items-center gap-3">
          Verification <span className="text-acid italic">Logs</span>
        </h2>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input 
              type="text" 
              placeholder="Search IDs, content..." 
              className="bg-void/50 border border-white/5 rounded-lg pl-10 pr-4 py-2 text-sm focus:border-acid/30 outline-none transition-all w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select 
            className="bg-void/50 border border-white/5 rounded-lg px-4 py-2 text-sm focus:border-acid/30 outline-none appearance-none cursor-pointer"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Verified">Verified</option>
            <option value="Fake">Fake</option>
            <option value="Suspicious">Suspicious</option>
          </select>
          
          <button 
            className="p-2 bg-void/50 border border-white/5 rounded-lg hover:bg-white/5 transition-all"
            onClick={() => { setSearchTerm(''); setStatusFilter('All'); }}
          >
            <RotateCcw size={16} className="text-gray-400" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-xs uppercase tracking-widest text-gray-500 border-b border-white/5">
            <tr>
              <th className="pb-4 font-mono font-bold px-4">Verification ID</th>
              <th className="pb-4 font-mono font-bold px-4">Content Name</th>
              <th className="pb-4 font-mono font-bold px-4">Status</th>
              <th className="pb-4 font-mono font-bold px-4">Confidence</th>
              <th className="pb-4 font-mono font-bold px-4">Timestamp</th>
              <th className="pb-4 font-mono font-bold px-4">Source</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {filteredLogs.map((log, idx) => (
              <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                <td className="py-4 font-mono text-acid px-4">{log.id}</td>
                <td className="py-4 text-gray-300 px-4">{log.content}</td>
                <td className="py-4 px-4">
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full border w-fit text-xs ${getStatusClass(log.status)}`}>
                    {getStatusIcon(log.status)}
                    {log.status}
                  </div>
                </td>
                <td className="py-4 px-4 font-bold">{log.confidence}%</td>
                <td className="py-4 text-gray-500 px-4 font-mono text-xs">{new Date(log.timestamp).toLocaleString()}</td>
                <td className="py-4 text-gray-400 px-4">{log.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-6">
        <p className="text-xs text-gray-500">Showing {filteredLogs.length} of {logs.length} records</p>
        <div className="flex items-center gap-2">
          <button className="p-2 bg-void/50 border border-white/5 rounded-lg hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed">
            <ChevronLeft size={16} />
          </button>
          <div className="px-3 py-1 bg-acid/10 border border-acid/20 text-acid text-xs rounded-lg">1</div>
          <button className="p-2 bg-void/50 border border-white/5 rounded-lg hover:bg-white/5">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationLogs;
