import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const rcvCart = props.sendCart;

    const totalPrice = rcvCart.reduce((total,product)=> total+product.price * product.quantity, 0);
    let shipping = 0.00;
    if(totalPrice >35){
        shipping = 0.00;
    }
    else if(totalPrice >15){
        shipping = 4.25;
    }
    else if(totalPrice >0){
        shipping = 12.00;
    }
    const tax = (totalPrice/10).toFixed(2);
    const grandTotalPrice = (totalPrice + shipping + Number(tax)).toFixed(2);
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items Odered:{rcvCart.length}</p>
            <p>Product Price:{(totalPrice).toFixed(2)}</p>
            <p><small>Shipping Cost:{shipping}</small></p>
            <p><small>Tax/Vat:{tax}</small></p>
            <h1>Total: {grandTotalPrice}</h1>
            <br/>
            {props.children}


        </div>
    );
};

export default Cart;