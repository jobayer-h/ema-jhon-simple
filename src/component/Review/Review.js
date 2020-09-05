import React, { useState, useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
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
    return (
        <div>
            <h1>Review Items: {cart.length}</h1>
            {
                cart.map(pd => <ReviewItem key={pd.key} product={pd}></ReviewItem>)
            }
        </div>
    );
};

export default Review;