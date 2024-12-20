
import React from 'react';

const UserCard = ({ name, age, location }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.info}>Age: {age}</p>
      <p style={styles.info}>Location: {location}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    width: '250px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  name: {
    fontSize: '1.5em',
    margin: '0 0 10px 0',
  },
  info: {
    fontSize: '1em',
    color: '#555',
  },
};

export default UserCard;
