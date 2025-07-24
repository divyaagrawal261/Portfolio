// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Mask from './components/Mask';

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
    </div>
  );
}

export default App;
