import React from 'react';

function CandidateForm({ candidate, onEdit }) {
  return (
    <div className="candidate-card">
      <div className="candidate-info">
        <p><strong>Name:</strong> {candidate.name}</p>
        <p><strong>Email:</strong> {candidate.email}</p>
        <button onClick={onEdit}>Edit</button>
      </div>
    </div>
  );
} 

export default CandidateForm;
