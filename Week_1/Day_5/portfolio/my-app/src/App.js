import {Header, AboutMe, Projects, Skills, Team, Contact, CV } from './components/Nav'
import './App.css';


function App() {
  return (
    <div className="App">
       <div>
            <Header />
            <AboutMe />
            <Skills />
            <CV />
            <Projects />
            <Team />
            <Contact />
        </div>
    
    </div>
  );
}

export default App;
