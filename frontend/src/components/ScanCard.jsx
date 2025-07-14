import React from 'react';
import './ScanCard.css';

function ScanCard({ scan, onClick }) {
  return (
    <div className="scan-card" onClick={() => onClick(scan)}>
      <img src={`http://localhost:8000${scan.image}`} alt="x-ray" className="thumbnail" />
      <h3>{scan.body_part}</h3>
      <p>{scan.diagnosis}</p>
      <p>{scan.scan_date}</p>
    </div>
  );
}

export default ScanCard;
