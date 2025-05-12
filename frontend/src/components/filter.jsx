import React from 'react';

const Filter = ({ current, onChange }) => {
  const filters = ['all', 'completed', 'pending'];

  return (
    <div style={styles.container}>
      {filters.map(f => (
        <button
          key={f}
          onClick={() => onChange(f)}
          style={{
            ...styles.button,
            ...(current === f ? styles.activeButton : {})
          }}
        >
          {f[0].toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '12px',
    margin: '1rem 0',
    justifyContent: 'center',
  },
  button: {
    padding: '8px 16px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    backgroundColor: '#f9f9f9',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
  },
  activeButton: {
    fontWeight: 'bold',
    borderColor: '#007BFF',
    backgroundColor: '#E6F0FF',
    color: '#007BFF',
  }
};

export default Filter;
