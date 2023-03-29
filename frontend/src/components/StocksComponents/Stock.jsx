import React from 'react'
import '../StocksComponents/Stocks.css'
const Stock = (stock) => {
    return (
        <div className='stock'>
            <h2 className="card-item-symbol">{stock.symbol}</h2>
            <h3 className="card-item-name">Name : {stock.name}</h3>
            <h3 className="card-item-pricwe">Current Price : ${stock.price}</h3>
            <h3 className="quantity">Quantity Purchased: 0</h3>
            <div className="bs-btns">
                <button type='submit'> BUY </button>
                <button type='submit'> SELL </button>
            </div>
        </div>
    )
}

export default Stock