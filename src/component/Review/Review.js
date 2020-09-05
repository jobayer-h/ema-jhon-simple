import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImg from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);

    const removeItem = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }
    const [order, setOrder] = useState(false);

    const placeOrder = () => {
        setCart([]);
        setOrder(true);
        processOrder();
    }

    let thanks;
    if (order) {
        thanks = <img src={happyImg} alt=""/>
    }

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
    return (

        <div className="shop-container">
            <div className="product-container">
            <h1>Review Items: {cart.length}</h1>
            {
                cart.map(pd => <ReviewItem removeItem={removeItem} key={pd.key} product={pd}></ReviewItem>)
            }
            {thanks}
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <Cart item ={cart}>
                <button onClick={placeOrder} className="review-btn">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;