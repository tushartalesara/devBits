import React, { useEffect, useState } from 'react'
import Stock from '../StocksComponents/Stock'

const Stocks = () => {
    const [stocks,setStocks]=useState([])

    const fetchData=()=>{
        return fetch('https://fmpcloud.io/api/v3/quote/AAPL,IBM,TSLA,TCS,MSFT,GOOGL,AMZN,NVDA,META,JNJ,JPM,MA,CVX,BAC,TMO,COST?apikey=b5789e39e2b3c258e95b4300e50f595f')
            .then(res=>res.json())
            .then(data=>setStocks(data))
    }
    console.log(stocks)
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div className='stocks'>
            <h1>STOCKS:</h1>
            <ul className="stocks-list">
                { stocks.map((stock,index)=>(
                    <li className="stock-item" key={index}><Stock {...stock} /></li>
                )) }
            </ul>
        </div>
    )
}
export default Stocks