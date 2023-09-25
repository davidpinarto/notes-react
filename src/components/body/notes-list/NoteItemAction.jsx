import React from 'react';

function NoteItemAction({ id, onDelete }) {
  return (
    <button className="note-item__delete" onClick={() => onDelete(id)}>
      Delete
    </button>
  );
}

export default NoteItemAction;
