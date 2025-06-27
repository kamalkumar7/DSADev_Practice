import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import FormWithReducer from './hooks/UseReducer';
import WindowWidthComponent from './hooks/customHook/WindowWidthComponent';
import UseContextExample from './hooks/UseContext';
function Home() {
  return (
    <>
      <h2>Home Page</h2>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/hooks/useReducer">useReducer</Link></li>
          <li><Link to="/hooks/useContext">useContext</Link></li>
          <li><Link to="/hooks/custom">custom hook</Link></li>

        </ul>
      </nav>
    </>
  );

}

function About() {
  return <h2>About Page</h2>;
}

function Services() {
  return <h2>Services Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}
function Navigation() {
  const location = useLocation();
  return location.pathname !== '/' ? <p><Link to="/">Home</Link></p> : null;
}

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hooks/useReducer" element={<FormWithReducer />} />
        <Route path="/hooks/useContext" element={<UseContextExample />} />
        <Route path="/hooks/custom" element={<WindowWidthComponent />} />
      </Routes>
    </Router>
  );
}

export default App;