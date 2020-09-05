import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData/index';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {
    const [product, setProduct] = useState(fakeData);
    const [cart, setCart] = useState([]);
    const btnHandeler = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    product.map(singleProduct => <Product addToCart={true} btnHandeler={btnHandeler} productData={singleProduct}></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <Cart item ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;