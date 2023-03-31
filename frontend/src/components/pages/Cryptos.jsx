import React, { useEffect, useState } from "react";
import Crypto from "../CryptosComponents/Crypto";
import axios from "axios";
import '../StocksComponents/Stocks.css'
import { Link } from "react-router-dom";
const Cryptos = () => {
  const [cryptosDetail, setCryptosDetail] = useState([]);
  const [cryptosQuantity, setCryptosQuantity] = useState({});
  const [walletAmount, setWalletAmount] = useState();
  const fetchdata = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/user", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      setCryptosQuantity(res.data.cryptos);
      setWalletAmount(res.data.walletAmount);
      fetch("https://api.coinranking.com/v2/coins", {
        method: "GET",
        headers: {
          "X-access-token": "coinranking8f02acfbee445d2026603e27c5b432056d01c261d68a4934",
        },
      })
      .then((res) => res.json())
      .then((data) => setCryptosDetail(data.data.coins))
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="stocks">
      <div className="nav">
        <Link className="navbar-brand" to="/">Stonks <i className="fa-solid fa-bolt" /></Link>
        <div className="nav1">
          <h1 className='topic'>CryptoCurrencies:</h1>
          <h3 className='wallet'>Your Wallet amount: Rs. {walletAmount}</h3>
        </div>
      </div>
      <ul className="stocks-list">
        {cryptosDetail.map((crypto, index) => (
          <li className="stock-item" key={index}>
            <Crypto {...crypto} quantity={cryptosQuantity[crypto.symbol]} walletAmount={walletAmount} setWalletAmount={setWalletAmount}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cryptos;
