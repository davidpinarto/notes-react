import React from 'react';

function NoteItemContent({ title, body, createdAt }) {
  return (
    <>
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__createdAt">{createdAt}</p>
      <p className="note-item__body">{body}</p>
    </>
  );
}

export default NoteItemContent;
