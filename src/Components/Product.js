import React from 'react'
import { useStateValue } from '../Provider'

import './Product.css'

const Product = ({id, title, image, price, rating}) => {
    const [{basket}, dispatch] = useStateValue()

    const AddtoBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

    return(
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                <strong>$</strong>
                <strong>{price}</strong>
                </p>
            <div className="product__rating">
                {Array(rating)
                  .fill()
                  .map((_) => (
                      <i class="fas fa-star" style={{color: "#f5c507"}}></i>
                  ))
                }
            </div>
            </div>
            <img src={image} alt="product-image" />
            <button style={{cursor: "pointer"}} onClick={AddtoBasket}>Add To Basket</button>
        </div>
    )
}

export default Product