import React from 'react';

function DetailModel({ scan, onClose }) {
  if (!scan) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={`http://localhost:8000${scan.image}`} alt="x-ray full" />
        <h2>{scan.body_part}</h2>
        <p><strong>Diagnosis:</strong> {scan.diagnosis}</p>
        <p><strong>Date:</strong> {scan.scan_date}</p>
        <p><strong>Institution:</strong> {scan.institution}</p>
        <p><strong>Description:</strong> {scan.description}</p>
        <p><strong>Tags:</strong> {scan.tags.join(', ')}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default DetailModel;