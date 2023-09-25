import React from 'react';
import NoteItem from './NoteItem';

function NotesList({ notes, onDelete }) {
  return (
    <div className="notes-list">
      <h2>Notes</h2>

      <div className="notes-list__content">
        {notes.length ? (
          notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              {...note}
            />
          ))
        ) : (
          <h3 className="empty-notes">Tidak ada catatan</h3>
        )}
      </div>
    </div>
  );
}

export default NotesList;

// notes.map((note) => (
//   <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
// ))
