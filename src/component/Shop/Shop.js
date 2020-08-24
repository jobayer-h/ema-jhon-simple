import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData/index';
import Product from '../Product/Product';
const Shop = () => {
    const [product, setProduct] = useState(fakeData);
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    product.map(singleProduct => <Product productData={singleProduct}></Product>)
                }
            </div>
            <div className="cart-container">
                    <h1>ths is cart</h1>
            </div>
        </div>
    );
};

export default Shop;