import React from 'react';

function CreateNotesContentTitle({ value, onChange }) {
  return (
    <div className="create-notes__content-title">
      <label htmlFor="title">Judul</label>
      <input
        id="title"
        type="text"
        placeholder="Apa judul notes hari ini?..."
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default CreateNotesContentTitle;
