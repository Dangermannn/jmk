import React, { useState } from "react";

const TaxCalculator = () => {
  const [income, setIncome] = useState(11000);
  const [costs, setCosts] = useState(5396);
  const [rate, setRate] = useState(2);
  const [zus, setZus] = useState("duzy");
  const [otherIncome, setOtherIncome] = useState(0);
  const [children, setChildren] = useState(0);
  const [withSpouse, setWithSpouse] = useState(false);

  const bigZus = 1600;
  const smallZus = 700;
  const healthOnly = 380;

  const zusCost = zus === "duzy" ? bigZus : zus === "maly" ? smallZus : healthOnly;

  const scaleTax = (income - costs - zusCost) * 0.12;
  const linearTax = (income - costs - zusCost) * 0.19;
  const lumpSumTax = (income * rate) / 100 + zusCost;

  const netScale = income - costs - zusCost - scaleTax;
  const netLinear = income - costs - zusCost - linearTax;
  const netLumpSum = income - lumpSumTax;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded text-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Najkorzystniejsza forma opodatkowania</h2>

      <div className="mb-4">
        <label className="block mb-1 text-gray-700">Twój miesięczny przychód netto</label>
        <input
          type="range"
          min="100"
          max="100000"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
          className="w-full"
        />
        <div className="text-gray-700">{income} zł</div>
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-gray-700">Twoje miesięczne koszty netto</label>
        <input
          type="range"
          min="0"
          max="20000"
          value={costs}
          onChange={(e) => setCosts(Number(e.target.value))}
          className="w-full"
        />
        <div className="text-gray-700">{costs} zł</div>
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-gray-700">Stawka ryczałtu (%)</label>
        <input
          type="number"
          value={rate}
          min="2"
          max="17"
          onChange={(e) => setRate(Number(e.target.value))}
          className="w-full border rounded px-3 py-1 text-gray-700"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-gray-700">Jaki ZUS opłacasz?</label>
        <div className="space-x-4 text-gray-700">
          <label><input type="radio" checked={zus === "duzy"} onChange={() => setZus("duzy")} /> Duży ZUS</label>
          <label><input type="radio" checked={zus === "maly"} onChange={() => setZus("maly")} /> Mały ZUS</label>
          <label><input type="radio" checked={zus === "zdrowotny"} onChange={() => setZus("zdrowotny")} /> Tylko składka zdrowotna</label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-gray-700">Dochód z innych źródeł</label>
        <input
          type="number"
          value={otherIncome}
          onChange={(e) => setOtherIncome(Number(e.target.value))}
          className="w-full border rounded px-3 py-1 text-gray-700"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-gray-700">Liczba dzieci</label>
        <select
          value={children}
          onChange={(e) => setChildren(Number(e.target.value))}
          className="w-full border rounded px-3 py-1 text-gray-700"
        >
          {[0, 1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-gray-700">Rozliczenie z małżonkiem</label>
        <div className="space-x-4 text-gray-700">
          <label><input type="radio" checked={withSpouse} onChange={() => setWithSpouse(true)} /> Tak</label>
          <label><input type="radio" checked={!withSpouse} onChange={() => setWithSpouse(false)} /> Nie</label>
        </div>
      </div>

      <div className="mt-6 p-4 border rounded bg-gray-50 text-gray-700">
        <h3 className="text-lg font-semibold mb-2">Twój miesięczny dochód netto</h3>
        <ul>
          <li>Skala podatkowa: <strong>{netScale.toFixed(2)} zł</strong></li>
          <li>Podatek liniowy: <strong>{netLinear.toFixed(2)} zł</strong></li>
          <li>Ryczałt: <strong>{netLumpSum.toFixed(2)} zł</strong></li>
        </ul>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Przejdź na B2B z nami</button>
      </div>
    </div>
  );
};

export default TaxCalculator;
