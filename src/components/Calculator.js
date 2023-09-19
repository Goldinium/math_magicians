export default function Calculator() {
  return (
    <>
      <div className="parent">
        <div className="div1 result" name="result">0</div>
        <button className="div2 btn numbers" type="submit" name="0">0</button>
        <button className="div3 btn numbers" type="submit" name=".">.</button>
        <button className="div4 btn operands" type="submit" name="=">=</button>
        <button className="div5 btn operands" type="submit" name="+">+</button>
        <button className="div6 btn operands" type="submit" name="-">-</button>
        <button className="div7 btn operands" type="submit" name="x">x</button>
        <button className="div8 btn operands" type="submit" name="/">/</button>
        <button className="div9 btn numbers" type="submit" name="1">1</button>
        <button className="div10 btn numbers" type="submit" name="2">2</button>
        <button className="div11 btn numbers" type="submit" name="3">3</button>
        <button className="div12 btn numbers" type="submit" name="4">4</button>
        <button className="div13 btn numbers" type="submit" name="5">5</button>
        <button className="div14 btn numbers" type="submit" name="6">6</button>
        <button className="div15 btn numbers" type="submit" name="7">7</button>
        <button className="div16 btn numbers" type="submit" name="8">8</button>
        <button className="div17 btn numbers" type="submit" name="9">9</button>
        <button className="div18 btn numbers" type="submit" name="AC">AC</button>
        <button className="div19 btn numbers" type="submit" name="plus_minus">&#177;</button>
        <button className="div20 btn numbers" type="submit" name="modulo">%</button>
      </div>
    </>
  );
}
