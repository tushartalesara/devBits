import React, { useEffect, useState } from "react";
import Crypto from "../CryptosComponents/Crypto";

const Cryptos = () => {
  const [cryptos, setCryptos] = useState([]);
  const fetchdata = () => {
    return fetch("https://api.coinranking.com/v2/coins",{
      method: "GET",
      headers: {
        "X-access-token":
          "coinranking8f02acfbee445d2026603e27c5b432056d01c261d68a4934",
      },
    })
      .then((res) => res.json())
      .then((data) => setCryptos(data.data.coins));
  };
    console.log(cryptos);
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="stocks">
      <h1>CRYPTOCURRENCIES:</h1>
      <ul className="stocks-list">
        {cryptos.map((crypto, index) => (
          <li className="stock-item" key={index}>
            <Crypto {...crypto} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cryptos;
