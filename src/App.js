import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

function App() {
  return (
    <div className="App">
      <div className="profile-grid">
        <UserProfile name="Kyle Chester" age={21} location="Manila" />
        <UserProfile name="Hanami Kyousuke" age={18} location="Tokyo" />
        <UserProfile name="Haruki Itanagi" age={20} location="Hokaido" />
      </div>
    </div>
  );
}
export default App;