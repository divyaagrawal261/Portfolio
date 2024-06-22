import './App.css';
import {Route, Routes} from "react-router-dom";
import {HeroSection} from './pages/HeroSection';
import AnimatedCursor from 'react-animated-cursor';
import { Projects } from './pages/Projects';
import { Experience } from './pages/Experience';
import { Skills } from './pages/Skills';
// import { LoadingScreen } from './components/LoadingScreen';
// import SkillSection from './components/SkillSection';

function App() {
  return (
    <div className="App box-border">
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
      <Routes>
      <Route path="/" element={<HeroSection/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/experience" element={<Experience/>}/>
      <Route path="/skills" element={<Skills/>}/>
      </Routes>
    </div>
  );
}

export default App;
