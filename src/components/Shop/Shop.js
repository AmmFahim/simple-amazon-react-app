import React, { useState } from 'react';
import fakeData from '../../fakeData/products'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'





const Shop = () => {

const first10 = fakeData.slice(0, 10);
const [products,setProducts] = useState(first10);
const [cart,setCart] = useState([]);
const addButtonHandle =(sendProduct) =>{
    // console.log('Product Added',sendProduct);
    const newCart = [...cart,sendProduct];
    setCart(newCart);
    
    
}
    return (
        <div class = "shop-container">
            <div className="product-container">
                <h1>Here Have :{products.length}</h1>
                {
                    
                    products.map(p =><Product 
                        sendHandleButton = {addButtonHandle}
                        sendProduct= {p}
                        > </Product>)
                }

            </div>
            <div className="cart-container">

                <Cart sendCart={cart}></Cart>

            </div>


        </div>
    );
};

export default Shop;