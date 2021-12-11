import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/products';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productkey} = useParams();
    const product = fakeData.find(p=>p.key === productkey);
  
    return (
        <div>
            <h1>This is Product id: {productkey}</h1>
            <Product showAddToCart = {false} sendProduct = {product}></Product>
        </div>
    );
};

export default ProductDetails;