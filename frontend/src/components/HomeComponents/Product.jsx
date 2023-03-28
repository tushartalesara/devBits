import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <article className="cards-item">
            <Link to='/' className='cards-item-link'>
                <div className="cards-item-info">
                    <h3 className="cards-item-name">Product</h3>
                    <h5 className='cards-item-desc'>This is product Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quisquam sunt ducimus odio, facilis veniam vitae odit adipisci dolorum sed consectetur tempora voluptatem repellendus similique rem officia nulla voluptatibus obcaecati velit nemo, unde recusandae! Amet nihil temporibus soluta commodi natus.</h5>
                </div>
            </Link>
        </article>
    )
}

export default Product
