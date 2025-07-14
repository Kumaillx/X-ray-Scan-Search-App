import React, { useEffect, useState } from 'react';
import { getScans } from '../api';
import ScanCard from '../components/ScanCard';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import DetailModal from '../components/DetailModal';

function Home() {
  const [scans, setScans] = useState([]);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({});
  const [selectedScan, setSelectedScan] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getScans({ search: query, ...filters });
      setScans(response.data);
    };
    fetchData();
  }, [query, filters]);

  return (
    <div className="app">
      <h1>X-ray Scan Search</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <Filters filters={filters} setFilters={setFilters} />
      <div className="grid">
        {scans.map((scan) => (
          <ScanCard key={scan.id} scan={scan} onClick={setSelectedScan} />
        ))}
      </div>
      <DetailModal scan={selectedScan} onClose={() => setSelectedScan(null)} />
    </div>
  );
}

export default Home;