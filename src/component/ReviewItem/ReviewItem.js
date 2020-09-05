import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, price,seller,stock, img} = props.product;
    const features = props.product.features;
    return (

        <div className="single-product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-information">
                <h4>{name}</h4>
                <div className="product-description">
                    <div className="right">
                        <p>by:{seller}</p>
                        <p>${price}</p>
                        <h3>Quantity: {quantity}</h3>
                        <p>only {stock} left in stock - order soon</p>
                        <button>Remove item</button>
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

export default ReviewItem;