import React, { useState } from 'react';

function EditForm({ candidate, onSave, onCancel }) {
  const [name, setName] = useState(candidate.name);
  const [email, setEmail] = useState(candidate.email);

  const handleSave = () => {
    onSave({ name, email });
  };

  return (
    <div className="edit-form">
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default EditForm;
