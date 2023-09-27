import './index.css';
import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/fetchQuotes';
import Home from './home';
import NotFound from './notFound';

export default function App() {
  return (
    <>  
   <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      |
      <li>
        <Link to="/quotes">Quotes</Link>
      </li>
      |
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
    </ul>
  </nav>
  <header>
    <h1>Math magicians,</h1>
  </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quote />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
