import { useState } from 'react';
import calculate from '../logic/calculate';
import Layout from './layout';

export default function Calculator() {
  const [calculationData, setcalculationData] = useState({});

  const handleClick = (button) => {
    const newCalculation = calculate(calculationData, button.target.textContent);
    setcalculationData(newCalculation);
  };

  return (
    <>
      <div className="parent">
        <Layout calculationData={calculationData} handleClick={handleClick} />
      </div>
    </>
  );
}
