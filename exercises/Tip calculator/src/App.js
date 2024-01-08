import { useState } from "react";
import "./styles.css";

export default function App() {
  const [bill, setBill] = useState(0);
  const [myService, setMyService] = useState(0);
  const [myFService, setMyFService] = useState(0);

  const tip = (bill * ((myService + myFService) / 2)) / 100;

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage
        percentage={myService}
        onSelect={setMyService}
        text="How did you like the service ?"
      />
      <SelectPercentage
        percentage={myFService}
        onSelect={setMyFService}
        text="How did your friend like the service ?"
      />
      <Output bill={bill} tip={tip} />
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      How much was the bill?
      <input
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function SelectPercentage({ percentage, onSelect, text }) {
  return (
    <div>
      {text}
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div>
      {bill > 0 && (
        <h2>
          You pay {bill + tip} (${bill} + ${tip})
        </h2>
      )}
    </div>
  );
}
