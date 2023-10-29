import "../Counter/_counter.scss";

export default function Counter({counter, sumauno, restauno}) {
  return (
    <div className="counter-style">
      <button onClick={sumauno}>+</button>
      {counter}
      <button onClick={restauno}>-</button>
    </div>
  );
}
