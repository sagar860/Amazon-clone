import React from 'react';
import "./checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from "./Subtotal";
import {useStateValue } from "./StateProvider";;


function Checkout() {
    const [{cart,user}, dispatch] = useStateValue();
    return (
        <div className= "checkout">
            <div className ="checkout__left">
                <img className ="checkout__ad" 
                src="https://in.bmscdn.com/offers/tncbanner/icici-debit-card-offer-icicor0813.jpg?31032021141825" 
                alt=""
                />
           
              <div >
                  <h3>Hello</h3>
                  <h5>{user?.email}</h5>
                <h2 className="checkout__title">
                Your Shopping Cart</h2>

                {cart.map(item=>(
                   <CheckoutProduct
                   id={item.id}
                   title={item.title}
                   image={item.image}
                   price={item.price}
                   rating={item.rating}
                   />
                ))}

               </div>
               </div>

               <div className="checkout__right">
                   <Subtotal />
                   
               </div>
        
    </div>
    )
}

export default Checkout
