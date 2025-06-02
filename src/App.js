import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Poems from './Pages/Poems';

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Poems" element={<Poems />} />
      </Routes>
    </Router>
  );
}

export default App;

