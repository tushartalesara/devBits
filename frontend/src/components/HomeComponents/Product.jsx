import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
    console.log(props)
    return (
        <article className="cards-item">
            <Link to='/stocks' className='cards-item-link'>
                <div className="cards-item-info">
                    <h3 className="cards-item-name">{props.name}</h3>
                    <h5 className='cards-item-desc'>{props.desc}</h5>
                </div>
            </Link>
        </article>
    )
}

export default Product
