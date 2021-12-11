import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
  // console.log(props);
  const { name, img, seller, price, stock, key } = props.sendProduct;
  return (
    <div class="product">
      <div>
        <img src={img} alt=""></img>
      </div>
      <div class="product-description">
        <h3 style={{ color: "blue" }}>
          <Link to={"/product/" + key}>{name}</Link>{" "}
        </h3>
        <div class="specification">
          <div>
            <p>by:{seller}</p>
            <p>${price}</p>
            <p>only {stock} left in stock - order soon</p>
            {props.showAddToCart && (
              <button
                class="addCartButton"
                onClick={() => props.sendHandleButton(props.sendProduct)}
              >
                <FontAwesomeIcon icon={faCartPlus} /> Add to cart
              </button>
            )}
          </div>
          <div>
            <h3>fahim</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
