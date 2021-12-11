import React from 'react';
import "./ReviewItem.css"

const ReviewItem = (props) => {
    const {name,quantity,price,key} = props.product;

    return (
        <div className="reviewItem-container">
            <h3 className="product-name">{name}</h3>
            <h5>Price: $ {price}</h5>
            <h4 className="quantity">Product Item: {quantity}</h4>
            <br/>
            <button 
            onClick={() => props.removeButton(key)}
            className="mainButton"
            >Remove</button>
        </div>
        
    );
};

export default ReviewItem;