import React, { useEffect, useState } from 'react'
import Stock from '../StocksComponents/Stock'

const Stocks = () => {
    const [stocks,setStocks]=useState([])

    const fetchData=()=>{
        return fetch('https://fmpcloud.io/api/v3/quote/AAPL,IBM,PANAMAPET.NS,IGV,RYGTX,EFHT,BA3.L?apikey=b5789e39e2b3c258e95b4300e50f595f')
            .then(res=>res.json())
            .then(data=>setStocks(data))
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div className='stocks'>
            <h1>STOCKS:</h1>
            <ul className="stocks-list">
                { stocks.map((stock,index)=>(
                    <li className="stock-item"><Stock key={index} {...stock} /></li>
                )) }
            </ul>
        </div>
    )
}
export default Stocks