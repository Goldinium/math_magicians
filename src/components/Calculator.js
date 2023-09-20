import { useState } from 'react';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [calculationData, setcalculationData] = useState({});

  const handleClick = (button) => {
    const newCalculation = calculate(calculationData, button.target.textContent);
    setcalculationData(newCalculation);
  };

  return (
    <>
      <div className="parent">
        <div className="div1 result">{calculationData.next || calculationData.total || 0}</div>
        <button className="div2 btn numbers" type="submit" onClick={handleClick}>0</button>
        <button className="div3 btn numbers" type="submit" onClick={handleClick}>.</button>
        <button className="div4 btn operands" type="submit" onClick={handleClick}>=</button>
        <button className="div5 btn operands" type="submit" onClick={handleClick}>+</button>
        <button className="div6 btn operands" type="submit" onClick={handleClick}>-</button>
        <button className="div7 btn operands" type="submit" onClick={handleClick}>x</button>
        <button className="div8 btn operands" type="submit" onClick={handleClick}>÷</button>
        <button className="div9 btn numbers" type="submit" onClick={handleClick}>1</button>
        <button className="div10 btn numbers" type="submit" onClick={handleClick}>2</button>
        <button className="div11 btn numbers" type="submit" onClick={handleClick}>3</button>
        <button className="div12 btn numbers" type="submit" onClick={handleClick}>4</button>
        <button className="div13 btn numbers" type="submit" onClick={handleClick}>5</button>
        <button className="div14 btn numbers" type="submit" onClick={handleClick}>6</button>
        <button className="div15 btn numbers" type="submit" onClick={handleClick}>7</button>
        <button className="div16 btn numbers" type="submit" onClick={handleClick}>8</button>
        <button className="div17 btn numbers" type="submit" onClick={handleClick}>9</button>
        <button className="div18 btn numbers" type="submit" onClick={handleClick}>AC</button>
        <button className="div19 btn numbers" type="submit" onClick={handleClick}>&#177;</button>
        <button className="div20 btn numbers" type="submit" onClick={handleClick}>%</button>
      </div>
    </>
  );
}
