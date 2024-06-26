import React, { useState } from 'react';
import CandidateForm from './components/candidateForm';
import EditForm from './components/editForm';
import './App.css'

function App() {
  const [candidate, setCandidate] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = (updatedCandidate) => {
    setCandidate(updatedCandidate);
    setIsEditing(false);
  };

  return (
    <div className="container">
      <header>
        <h1>Candidate Form</h1>
      </header>
      <main>
        {isEditing ? (
          <EditForm candidate={candidate} onSave={handleSaveClick} onCancel={handleCancelClick} />
        ) : (
          <CandidateForm candidate={candidate} onEdit={handleEditClick} />
        )}
      </main>
    </div>
  );
}

export default App;
