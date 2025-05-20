import React from "react";

export default function About() {
  const nds = () => {
    const totalValue = parseFloat(document.getElementById("total").value) || 0;
    const ndsInput = document.getElementById("nds");
    ndsInput.value = (totalValue * 0.2).toFixed(2);
  };

  const total = () => {
    const volume = parseFloat(document.getElementById("volume").value) || 0;
    const cost = parseFloat(document.getElementById("cost").value) || 0;
    const totalInput = document.getElementById("total");
    totalInput.value = (volume * cost).toFixed(2);
    nds(); // Update NDS whenever total is recalculated
  };

  return (
    <div className="about">
      <h1>About</h1>
      <div className="counter"></div>
      <label>Volume</label>
      <input
        className="volume"
        id="volume"
        type="number"
        onChange={total}
      ></input>
      <label>Cost</label>
      <input className="cost" id="cost" type="number" onChange={total}></input>
      <label>NDS</label>
      <input className="nds" id="nds" type="number" readOnly></input>
      <label>Total</label>
      <input className="total" id="total" type="number" readOnly></input>
    </div>
  );
}
