import React from 'react'
import { useStateValue } from '../Provider'
import './CheckoutProduct.css'

function CheckoutProduct( {id, title, image, price, rating} ) {
    const [{basket}, dispatch] = useStateValue()

    const RemoveToBasket = () => {
        dispatch({
            type: "REMOVE_TO_BASKET",
            id: id
        })
    }


    return (
        <div className="checkoutProduct">
            <img src={image} alt="product-img" />

            <div className="checkoutProduct__info">
                <h2 className="item-title"> {title} </h2>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_) => (
                        <i class="fas fa-star" style={{color: "#f5c507"}}></i>
                    ))
                    }
                </div>
                <div className="item-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>

                <div className="item-button" style={{marginTop: "15px"}}>
                    <button style={{cursor: "pointer"}} onClick={RemoveToBasket}>Remove To Basket</button>
                </div>
            </div>
        </div>
    )
}
 
export default CheckoutProduct
