import Home from './routes/Home';
import Contact from './routes/Contact';
import Project from './routes/Project';
import {Route,Routes} from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Pronect" element={<Project />} />
    </Routes>
    
    </>
  );
}

export default App;
