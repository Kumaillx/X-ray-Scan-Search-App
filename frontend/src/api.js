import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const getScans = (params) => API.get('/scans/', { params });
export const uploadScan = (data) => API.post('/scans/', data);
export const getScanById = (id) => API.get(`/scans/${id}/`);