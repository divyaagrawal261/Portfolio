// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Mask from './components/Mask';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';

function App() {

  const [showMask, setShowMask] = useState(true);
  window.onload = () => {
    console.log("Page loaded");
    setTimeout(()=>{
      setShowMask(false);
    }, 900);
  };
  return (
    <div className="App">
      {showMask && <Mask />}
      {!showMask && 
      <>
      <NavBar/>
      <HeroSection/>
      </>
      }
    </div>
  );
}

export default App;
