import React, { useEffect, useState } from 'react';
import { getAllTasks, addTask, updateTask, deleteTask } from '../api/task';
import TaskItem from '../components/tasks';
import FilterButtons from '../components/filter';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await getAllTasks();
      setTasks(res.data);
    } catch (err) {
      console.error("Failed to fetch tasks", err);
    }
  };

  const handleAddTask = async () => {
    if (!title.trim()) return;
    try {
      await addTask(title);
      setTitle('');
      fetchTasks();
    } catch (err) {
      console.error("Failed to add task", err);
    }
  };

  const handleComplete = async (id) => {
    await updateTask(id);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.isCompleted;
    if (filter === 'pending') return !task.isCompleted;
    return true;
  });

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>📝 Task Manager</h1>

      <div style={styles.inputGroup}>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter a new task..."
          style={styles.input}
        />
        <button onClick={handleAddTask} style={styles.addButton}>Add</button>
      </div>

      <FilterButtons current={filter} onChange={setFilter} />

      <ul style={styles.taskList}>
        {filteredTasks.map(task => (
          <TaskItem
            key={task._id}
            task={task}
            onComplete={handleComplete}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '3rem auto',
    padding: '2rem',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: '#333',
  },
  inputGroup: {
    display: 'flex',
    marginBottom: '1rem',
  },
  input: {
    flex: 1,
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '6px 0 0 6px',
    outline: 'none',
  },
  addButton: {
    padding: '0 1.5rem',
    backgroundColor: '#007bff',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '0 6px 6px 0',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  taskList: {
    listStyle: 'none',
    padding: 0,
    marginTop: '1rem',
  }
};

export default TaskPage;
