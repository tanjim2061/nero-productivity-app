import React from 'react';

const NoteItem = ({ note }) => {
  return (
    <div className="note-item">
      <p>{note}</p>
    </div>
  );
};

export default Noteitem;