import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormWithReducer from './hooks/UseReducer';
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
function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hooks/useReducer" element={<FormWithReducer />} />
      </Routes>
    </Router>
  );
}

export default App;