// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState('EUR');
  const [to, setTo] = useState('USD');
  const [result, setResult] = useState("");

  useEffect(() => {
    const converter = async () => {
      const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`);

      const conResult = await response.json();

      const final = conResult['rates'][to];

      setResult((final));
    }

    if(from === to) {
      setResult("");
      return;
    }

    converter();

  }, [amount, from, to]);
 

  return (
    <div>
      <input type="text" value={amount} onChange={(e) => setAmount(Number(e.target.value))}/>

      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <h1>{result}</h1>
    </div>
  );
}

export default App;
