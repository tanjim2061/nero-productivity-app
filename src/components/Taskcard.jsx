import React from 'react';

const TaskCard = ({ title }) => {
  return (
    <div className="task-card">
      <h4>{title}</h4>
    </div>
  );
};

export default Taskcard;

// 11. NoteItem.jsx
import React from 'react';

const NoteItem = ({ note }) => {
  return (
    <div className="note-item">
      <p>{note}</p>
    </div>
  );
};

export default Noteitem;
