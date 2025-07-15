
function ScanCard({ scan, onClick }) {
  return (
    <div className="scan-card" onClick={() => onClick(scan)}>
      <img src={`http://localhost:8000${scan.image}`} alt="x-ray" />
      <h3>{scan.body_part}</h3>
      <p>{scan.diagnosis}</p>
      <p>{scan.scan_date}</p>
    </div>
  );
}

export default ScanCard;
