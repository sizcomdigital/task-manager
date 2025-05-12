import React from 'react';

const TaskItem = ({ task, onComplete, onDelete }) => {
  const taskStyle = {
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const titleStyle = {
   
    fontSize: '16px',
    fontWeight: '500',
    flex: 1,
  };

  const buttonStyle = {
    padding: '6px 12px',
    marginLeft: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <li style={taskStyle}>
      <span style={titleStyle}>
        {task.isCompleted ? (
          <span role="img" aria-label="star" style={{ marginRight: '8px', color: 'green' }}>
            ⭐(complete)
          </span>
        ) : (
          <span style={{ color: 'orange' }}>(Pending)</span>
        )}
        {task.title}
      </span>

      {!task.isCompleted && (
        <button
          onClick={() => onComplete(task._id)}
          style={{ ...buttonStyle, backgroundColor: 'green' }}
        >
          Complete
        </button>
      )}

      <button
        onClick={() => onDelete(task._id)}
        style={{ ...buttonStyle, backgroundColor: 'red' }}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
