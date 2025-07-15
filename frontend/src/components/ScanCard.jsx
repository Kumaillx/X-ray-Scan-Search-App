import React from 'react';


const BACKEND_URL = 'http://localhost:8000';

function ScanCard({ scan, onClick }) {
  const imageUrl = scan.image ? `${BACKEND_URL}${scan.image}` : '/placeholder.png';

  return (
    <div className="scan-card" onClick={() => onClick(scan)}>
      <img src={imageUrl} alt="x-ray" className="thumbnail" />
      <h3>{scan.body_part}</h3>
      <p>{scan.diagnosis}</p>
      <p>{scan.scan_date}</p>
    </div>
  );
}

export default ScanCard;
