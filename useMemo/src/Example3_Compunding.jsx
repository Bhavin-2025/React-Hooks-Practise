import { useState, useMemo } from "react";

function calculateCompoundInterest(principal,rate,time){
    console.log('Calculating compound interest...');
  let amount = principal;
  for (let i = 0; i < 10000; i++) {
    amount = amount * (1 + rate / 100 / 12);
  }
  return (amount - principal).toFixed(2);
}
export default function Compounding() {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(5);
  const [time, setTime] = useState(10);
  const [count, setCount] = useState(0);

  const interest = useMemo(()=>{
    return calculateCompoundInterest(principal,rate,time)
  },[principal,rate,time])


  return (
    <div>
      <h1>Compunding interest calculator</h1>
      <div className="my-2">
        <label className="text-xl font-bold">Principal</label>
        <input
        className="mx-2 p-1 border-2 rounded-2xl"
          type="text"
          value={principal}
          placeholder="Enter a Principal amount"
          onChange={(e)=>setPrincipal(Number(e.target.value))}
        />
      </div>
      <div className="my-2">
        <label className="text-xl font-bold">Rate(% per year)</label>
        <input
        className="mx-2 p-1 border-2 rounded-2xl"
          type="text"
          value={rate}
          placeholder="Enter a rate "
          onChange={(e)=>setRate(Number(e.target.value))}
        />
      </div>
      <div className="my-2">
        <label className="text-xl font-bold">Time(years)</label>
        <input
        className="mx-2 p-1 border-2 rounded-2xl"
          type="text"
          value={time}
          placeholder="Enter a time year"
          onChange={(e)=>setTime(Number(e.target.value))}
        />
      </div>

      <h3 className="text-2xl">Interest Earned:₹{interest}</h3>
      <button className="my-2 border-2 !bg-blue-400 hover:!bg-blue-500" onClick={() => setCount(count + 1)}>
        Click Me (Counter: {count})
      </button>
    </div>
  );
}
