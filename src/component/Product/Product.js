import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { Link } from 'react-router-dom';
const Product = (props) => {
    const features = props.productData.features;
    const addToCart = props.btnHandeler;
    const {img,name,seller,price,stock, key} = props.productData;
    // console.log(props);
    return (
        <div className="single-product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-information">
                <h4><Link to={"/product/"+key}>{name}</Link></h4>
                <div className="product-description">
                    <div className="right">
                        <p>by:{seller}</p>
                        <p>${price}</p>
                        <p>only {stock} left in stock - order soon</p>
                        { props.addToCart && <button onClick={() => addToCart(props.productData)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
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