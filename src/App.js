import React, { useState } from 'react';
import './App.css';
import './css/stylee.css'
import Navigation from './components/Navigation'
import Main from './components/Main';
import CardBox from './components/Cardbox';


function App() {
  const [active, setActive] = useState(false);

  const handleToggleClick = () => {
    setActive(!active);
  };

  const navigationItems = [
    // Define your navigation items here
  ];

  return (
    <div className="container">
      <Navigation items={navigationItems} active={active} onToggleClick={handleToggleClick} />
      <Main active={active} onToggleClick={handleToggleClick} />
      <CardBox/>
    </div>
  );
}

export default App;
