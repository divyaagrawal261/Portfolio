import './App.css';
import {HeroSection} from './pages/HeroSection';
import AnimatedCursor from 'react-animated-cursor';
// import { LoadingScreen } from './components/LoadingScreen';
// import SkillSection from './components/SkillSection';

function App() {
  return (
    <div className="App">
      <AnimatedCursor innerSize={10}
  outerSize={20}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: 'var(--primary)'
  }}
  outerStyle={{
    border: '3px solid #e84a4a57'
  }}/>
      {/* <LoadingScreen/>
      <HeroSection/>
      <SkillSection/> */}
      <HeroSection/>
    </div>
  );
}

export default App;
