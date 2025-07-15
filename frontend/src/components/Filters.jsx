import React from 'react';

function Filters({ filters, setFilters }) {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="filters">
      <select name="body_part" onChange={handleChange}>
        <option value="">All Body Parts</option>
        <option value="Chest">Chest</option>
        <option value="Knee">Knee</option>
        <option value="Arm">Arm</option>
      </select>
      <select name="diagnosis" onChange={handleChange}>
        <option value="">All Diagnoses</option>
        <option value="Pneumonia">Pneumonia</option>
        <option value="Fracture">Fracture</option>
      </select>
      <select name="institution" onChange={handleChange}>
        <option value="">All Institutions</option>
        <option value="Mayo Clinic">Mayo Clinic</option>
        <option value="Cleveland Clinic">Cleveland Clinic</option>
      </select>
    </div>
  );
}

export default Filters;
