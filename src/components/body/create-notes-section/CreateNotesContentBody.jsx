import React from 'react';

function CreateNotesContentBody({ body, onNotesChangeEventHandler }) {
  return (
    <div className="create-notes__content-body">
      <label htmlFor="textarea">Notes</label>
      <textarea
        id="textarea"
        type="text"
        placeholder="Apa yang akan di tulis hari ini?..."
        value={body}
        onChange={onNotesChangeEventHandler}
        rows={20}
        required
      ></textarea>
    </div>
  );
}

export default CreateNotesContentBody;
