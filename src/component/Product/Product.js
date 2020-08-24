import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
    const features = props.productData.features;
    const addToCart = props.btnHandeler;
    // console.log(props);
    return (
        <div className="single-product">
            <div className="product-img">
                <img src={props.productData.img} alt=""/>
            </div>
            <div className="product-information">
                <h4>{props.productData.name}</h4>
                <div className="product-description">
                    <div className="right">
                        <p>by:{props.productData.seller}</p>
                        <p>${props.productData.price}</p>
                        <p>only {props.productData.stock} left in stock - order soon</p>
                        <button onClick={() => addToCart(props.productData)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                    </div>
                    <div className="left">
                        <h4>Features</h4>
                        <ul>
                            {
                                features.map(feature => <li>{feature.description}: {feature.value}</li>)
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;