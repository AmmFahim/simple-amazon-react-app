import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/products';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css'
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([]);
    const [placeOrder, setPlaceOrder] = useState(false);
    const handlePlaceButton = () => {
        setCart([]);
        setPlaceOrder(true);
        processOrder();
    }
    const handleRemoveButton = (productKey) =>{
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(()=>{
        //call cart from databaseManager
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        
        const cartProducts = productKey.map(key => {
        const product = fakeData.find( pd => pd.key === key);
        product.quantity = savedCart[key];
        return product;
        })
        setCart(cartProducts);
    },[])
    let thankYou;
    if(placeOrder){
        thankYou = <img src={happyImage} alt="" />
    }
    return (
        <div className="review-container">
            <div className="product-container">
            {/* <h3 id="cartLength"> Cart Items: {cart.length}</h3> */}
            {
                cart.map(pd=> <ReviewItem 
                    key = {pd.key}
                    removeButton = {handleRemoveButton}
                    product = {pd}
                    ></ReviewItem>)
            }
            {thankYou}
            </div>
            <div className="cart-container">
                <Cart sendCart = {cart}>
                <button onClick={handlePlaceButton} className="mainButton" >Place Order</button>
                </Cart>

            </div>

        </div>
    );
};

export default Review;