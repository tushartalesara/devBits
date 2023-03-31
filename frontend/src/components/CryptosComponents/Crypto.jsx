import axios from "axios";
import React, { useState } from "react";

const Crypto = (props) => {
  const [quantity, SetQuantity] = useState(props.quantity ? props.quantity : 0);
  const [buy, setBuy] = useState("");
  const [sell, setSell] = useState("");
  let isLogedIn;
  if (localStorage.getItem("token") == null) {
    isLogedIn = false;
  } else {
    isLogedIn = true;
  }
  const handleSell = (e) => {
    e.preventDefault();
    if (parseInt(sell,10) > quantity) {
      alert("Quantity available is less than what you are trying to sell!!");
      setSell("")
      return;
    }
    axios
      .post(
        `http://localhost:5000/api/sell/crypto/${props.symbol}`,
        {
          quantity: parseInt(sell, 10),
          price: props.price,
        },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        SetQuantity(quantity - parseInt(sell, 10));
        props.setWalletAmount(
          props.walletAmount + parseInt(sell, 10) * props.price
        );
        alert("Successfull");
        setSell("");
      })
      .catch((err) => console.log(err));
  };

  const handleBuy = (e) => {
    e.preventDefault();
    if (props.walletAmount < parseInt(buy, 10) * props.price) {
      alert("Wallet amount less than what you are trying to buy!!");
      setBuy("");
      return;
    }
    axios
      .post(
        `http://localhost:5000/api/buy/crypto/${props.symbol}`,
        {
          quantity: parseInt(buy, 10),
          price: props.price,
        },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        SetQuantity(quantity + parseInt(buy, 10));
        props.setWalletAmount(
          props.walletAmount - parseInt(buy, 10) * props.price
        );
        alert("Successfull");
        setBuy("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="stock">
      <h2 className="card-item-symbol">{props.symbol}</h2>
      <h3 className="card-item-name">Name : {props.name}</h3>
      <h3 className="card-item-pricwe">Current Price : ${props.price}</h3>
      <h3 className="card-item-change-percentage">
        Change Percentage: {props.change}%
      </h3>
      {isLogedIn ? (
        <>
          <h3 className="quantity">Quantity Purchased: {quantity}</h3>
          <div className="bs-btns">
            <input
              type="text"
              placeholder="Enter the quantity to buy..."
              value={buy}
              onChange={(e) => setBuy(e.target.value)}
            />
            <button type="submit" onClick={handleBuy}>
              {" "}
              BUY{" "}
            </button>
          </div>
          <div className="bs-btns">
            <input
              type="text"
              placeholder="Enter the quantity to sell..."
              value={sell}
              onChange={(e) => setSell(e.target.value)}
            />
            <button type="submit" onClick={handleSell}>
              {" "}
              SELL{" "}
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Crypto;
