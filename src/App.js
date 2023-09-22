import './index.css';
import Calculator from './components/Calculator';
import Quote from './components/fetchQuotes';

export default function App() {
  return (
    <>
      <Calculator />
      <Quote />
      <br />
      <span>im a text</span>
    </>
  );
}
