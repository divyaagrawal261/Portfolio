// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import Mask from './components/Mask';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';

function App() {
  const [showMask, setShowMask] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(false);
  
  useEffect(() => {
    console.log("Page loaded");
    const timer = setTimeout(() => {
      setShowMask(false);
    }, 900);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App" >
      {showMask && <Mask />}
      {!showMask && 
      <>
      <NavBar audioEnabled={audioEnabled} setAudioEnabled={setAudioEnabled} />
      <HeroSection audioEnabled={audioEnabled} />
      </>
      }
    </div>
  );
}

export default App;
