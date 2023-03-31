import React, { useEffect, useState } from 'react'
import Stock from '../StocksComponents/Stock'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Stocks = () => {
    const [stocksDetail, setStocksDetail] = useState([])
    const [stocksQuantity, setStocksQuantity] = useState({})
    const [walletAmount, setWalletAmount] = useState();
    let isLogedIn;
    if(localStorage.getItem("token")==null){isLogedIn=false}
    else{isLogedIn=true}
    const fetchData = async () => {
        try {
            if(isLogedIn){
                const res = await axios
                    .get("http://localhost:5000/api/user", {
                        headers: {
                            authorization: localStorage.getItem("token")
                        }
                    })
    
                setStocksQuantity(res.data.stocks);
                setWalletAmount(res.data.walletAmount);
            }
            fetch('https://fmpcloud.io/api/v3/quote/AAPL,IBM,TSLA,TCS,MSFT,GOOGL,AMZN,NVDA,META,JNJ,JPM,MA,CVX,BAC,TMO,COST?apikey=9b9b03c8f555c9094aaf12065b98caa4')
                .then(res => res.json())
                .then(data => { setStocksDetail(data) });
        }
        catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])
    return (
        <div className='stocks'>
            <div className="nav">
                <Link className="navbar-brand" to="/">Stonks <i className="fa-solid fa-bolt" /></Link>
                <div className="nav1">
                    <h1 className='topic'>STOCKS:</h1>
                    {isLogedIn ? (<h3 className='wallet'>Your Wallet amount: Rs. {walletAmount}</h3>) : ("")} 
                </div>
            </div>
            <ul className="stocks-list">
                {stocksDetail.map((stock, index) => (
                    <li className="stock-item" key={index}><Stock  {...stock} quantity={stocksQuantity[stock.symbol]} walletAmount={walletAmount} setWalletAmount={setWalletAmount} /></li>
                ))}
            </ul>
        </div>
    )
}
export default Stocks