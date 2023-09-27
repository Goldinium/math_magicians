import { useState } from 'react';
import calculate from '../logic/calculate';
import Layout from './layout';
import '../styles/calculator.css'

export default function Calculator() {
  const [calculationData, setcalculationData] = useState({});

  const handleClick = (button) => {
    const newCalculation = calculate(calculationData, button.target.textContent);
    setcalculationData(newCalculation);
  };

  return (
    <>
    <p>Let&apos;s do some arithmetics</p>
      <div className="parent">
        <Layout calculationData={calculationData} handleClick={handleClick} />
      </div>
    </>
  );
}
