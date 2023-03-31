import React from "react";

const Crypto = (crypto) => {
  return (
    <div className="stock">
      <h2 className="card-item-symbol">{crypto.symbol}</h2>
      <h3 className="card-item-name">Name : {crypto.name}</h3>
      <h3 className="card-item-pricwe">Current Price : ${crypto.price}</h3>
      <h3 className="card-item-change-percentage">Change Percentage: {crypto.change}%</h3>
      <h3 className="quantity">Quantity Purchased: 0</h3>
      <div className="bs-btns">
        <button type="submit"> BUY </button>
        <button type="submit"> SELL </button>
      </div>
    </div>
  );
};

export default Crypto;
