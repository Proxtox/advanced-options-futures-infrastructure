"use client";

import { useState } from 'react';

export default function OptionsFutures() {
  const [symbol, setSymbol] = useState('');

  const handleTrade = () => {
    alert(`Trading ${symbol} (demo)`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border rounded-3xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Advanced Options & Futures</h1>

      <div className="space-y-4">
        <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} className="w-full p-4 border rounded-2xl" placeholder="Symbol" />
        <button onClick={handleTrade} className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl text-lg font-semibold">
          Place Trade
        </button>
      </div>
    </div>
  );
}