import Navbar from './components/navbar/navbar.component';
import Intro from './components/intro/intro.component';
import Experience from './components/experience/experience.component';
import Skills from './components/skills/skills.component';
import Projects from './components/projects/projects.component';
import Contact from './components/contact/contact.component';
import './App.css';

const App = () => {
  return (
    <div className="body">
      <Navbar />
      <Intro />
      <div className='background-image'>
        <Experience />
        
        <Projects />
      </div>
      <Contact />
    </div>
  );
}

export default App;
