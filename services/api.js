import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const verificationService = {
  getVerifications: (params) => api.get('/api/verifications', { params }),
  getAlerts: () => api.get('/api/alerts'),
  getModelPerformance: () => api.get('/api/model/performance'),
  getDailyStats: () => api.get('/api/stats/daily'),
  getVerdictStats: () => api.get('/api/stats/verdicts'),
  getFakeTrendStats: () => api.get('/api/stats/fake-trend'),
  getSystemHealth: () => api.get('/api/system/health'),
  exportPdf: () => api.get('/api/export/pdf', { responseType: 'blob' }),
  exportCsv: () => api.get('/api/export/csv', { responseType: 'blob' }),
};

export default api;
