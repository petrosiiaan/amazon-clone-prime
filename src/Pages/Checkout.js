import React from 'react'
import { Link } from 'react-router-dom'
import CheckoutProduct from '../Components/CheckoutProduct'
import { useStateValue } from '../Provider'
import './Checkout.css'

const Checkout = () => {
    const [{basket}] = useStateValue()
    return (
        <div className="checkout">
           <div className="checkout__header">
               <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/GoogleAds_Final.jpg?v=1572621996&width=1024" alt="check-header"/>
           </div>
           {basket?.length === 0 ? (
               <div className="intro">
                <h2>Your Basket Is Empty:</h2>
                <p>Go To <Link to="/" className="link">Home</Link> (Where is items) for buying or adding items</p>
               </div>
           ) : (
            <div className="intro">
                <h2>Your Shopping Basket</h2>
               {basket?.map(items => (
                   <CheckoutProduct id={items.id} image={items.image} title={items.title} rating={items.rating} price={items.price} />
               ))}
            </div>
           )}
        </div>
    )
}

export default Checkout
