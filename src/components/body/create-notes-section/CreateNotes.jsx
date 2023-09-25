import React from 'react';
import CreateNotesContentTitle from './CreateNotesContentTitle';
import CreateNotesContentBody from './CreateNotesContentBody';

function CreateNotes({
  title,
  body,
  onTitleChangeEventHandler,
  onNotesChangeEventHandler,
  onSubmitEventHandler,
}) {
  return (
    <div className="create-notes">
      <h2>Buat Catatan</h2>

      <form className="create-notes__content" onSubmit={onSubmitEventHandler}>
        <CreateNotesContentTitle
          value={title}
          onChange={onTitleChangeEventHandler}
        />
        <CreateNotesContentBody
          value={body}
          onNotesChangeEventHandler={onNotesChangeEventHandler}
        />
        <button type="submit">Tambah Catatan</button>
      </form>
    </div>
  );
}

export default CreateNotes;
