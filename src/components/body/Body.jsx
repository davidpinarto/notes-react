import React from 'react';
import CreateNotes from './create-notes-section/CreateNotes';
import NotesList from './notes-list/NotesList';

function BodyContainer({
  notes,
  onDelete,
  title,
  body,
  onTitleChangeEventHandler,
  onNotesChangeEventHandler,
  onSubmitEventHandler,
}) {
  return (
    <div className="notes-content">
      <CreateNotes
        title={title}
        body={body}
        onTitleChangeEventHandler={onTitleChangeEventHandler}
        onNotesChangeEventHandler={onNotesChangeEventHandler}
        onSubmitEventHandler={onSubmitEventHandler}
      />
      <NotesList notes={notes} onDelete={onDelete} />
    </div>
  );
}

export default BodyContainer;
