import React, { useState, useEffect } from 'react';
import './Shop.css';
import fakeData from '../../fakeData/index';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
const Shop = () => {
    // eslint-disable-next-line
    const [product, setProduct] = useState(fakeData);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        //cart 
        const saveCart = getDatabaseCart();
        const cartItemskey = Object.keys(saveCart);
        const cartProducts = cartItemskey.map(key =>{
            const product = fakeData.find(pd => pd.key ===key);
            product.quantity = saveCart[key];
            return product;
        });
        setCart(cartProducts);
        
    },[])

    const btnHandeler = (product) => {
        const toBeAdded = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAdded);

        let count = 1;
        let newCart = [];
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const outhers = cart.filter(pd => pd.key !== toBeAdded);
            newCart = [...outhers, sameProduct];
        }else {
            product.quantity = 1
            newCart = [...cart, product];
        }
        setCart(newCart);
        // const count = sameProduct.length;
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
                <Cart item ={cart}>
                <Link to="/review"><button className="review-btn">Review your order</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;