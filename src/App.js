import './App.css';
import RotatingCylinder from './RotatingCylinder';
import HeroSection from './components/HomeSection';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <LoadingScreen/>
      <HeroSection/>
      <RotatingCylinder/>
    </div>
  );
}

export default App;
