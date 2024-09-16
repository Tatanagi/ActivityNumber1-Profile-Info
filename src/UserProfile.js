import React from 'react';

const UserProfile = ({ name, age, location }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.name}>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#add8e6', 
    padding: '20px',
    margin: '10px',
    textAlign: 'center',
    borderRadius: '8px',
    width: '200px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  },
  name: {
    fontWeight: 'bold',
    
  },
};
export default UserProfile;