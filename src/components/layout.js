const layout = (props) => (
  <>
    <div className="div1 result">{props.calculationData.next || props.calculationData.total || 0}</div>
    <button className="div2 btn numbers" type="submit" onClick={props.handleClick}>0</button>
    <button className="div3 btn numbers" type="submit" onClick={props.handleClick}>.</button>
    <button className="div4 btn operands" type="submit" onClick={props.handleClick}>=</button>
    <button className="div5 btn operands" type="submit" onClick={props.handleClick}>+</button>
    <button className="div6 btn operands" type="submit" onClick={props.handleClick}>-</button>
    <button className="div7 btn operands" type="submit" onClick={props.handleClick}>x</button>
    <button className="div8 btn operands" type="submit" onClick={props.handleClick}>÷</button>
    <button className="div9 btn numbers" type="submit" onClick={props.handleClick}>1</button>
    <button className="div10 btn numbers" type="submit" onClick={props.handleClick}>2</button>
    <button className="div11 btn numbers" type="submit" onClick={props.handleClick}>3</button>
    <button className="div12 btn numbers" type="submit" onClick={props.handleClick}>4</button>
    <button className="div13 btn numbers" type="submit" onClick={props.handleClick}>5</button>
    <button className="div14 btn numbers" type="submit" onClick={props.handleClick}>6</button>
    <button className="div15 btn numbers" type="submit" onClick={props.handleClick}>7</button>
    <button className="div16 btn numbers" type="submit" onClick={props.handleClick}>8</button>
    <button className="div17 btn numbers" type="submit" onClick={props.handleClick}>9</button>
    <button className="div18 btn numbers" type="submit" onClick={props.handleClick}>AC</button>
    <button className="div19 btn numbers" type="submit" onClick={props.handleClick}>&#177;</button>
    <button className="div20 btn numbers" type="submit" onClick={props.handleClick}>%</button>
  </>
);

export default layout;
