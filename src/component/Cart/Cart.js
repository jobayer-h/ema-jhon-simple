import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const addedProduct = props.item;
    let total = 0;
    for (let i = 0; i < addedProduct.length; i++) {
        const product = addedProduct[i];
        total = total + product.price * product.quantity;
    }
    let shipping = 0;
    if(total === 0){
        shipping = 0;
    }else{
        shipping = total/20 ;
    }
    let beforeTex = fixNum(total+shipping);
    let tex = fixNum(total/5);
    let grandTotal = fixNum(total + shipping + tex);

    function fixNum(num) {
        return Number(num.toFixed(2));
    }
    return (
        <div className="flex-cart">
            <p>Item Ordered : {addedProduct.length}</p>
            <table>
                <tbody>
                    <tr>
                        <td>Items: </td>
                        <td>${fixNum(total)}</td>
                    </tr>
                    <tr>
                        <td>Shipping & Handling:</td>
                        <td>${fixNum(shipping)}</td>
                    </tr>
                    <tr>
                        <td>Total before tax:</td>
                        <td>${beforeTex}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax:</td>
                        <td>${tex}</td>
                    </tr>
                    <tr>
                        <td className="total">Order Total:</td>
                        <td className="total">${grandTotal}</td>
                    </tr>
                </tbody>
            </table>
            {
                props.children
            }
        </div>
    );
};

export default Cart;