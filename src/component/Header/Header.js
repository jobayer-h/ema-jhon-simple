import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>

            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage inventory</a>
            </nav>
            
            <div class="search-container">
                <input type="text" className="search-input" placeholder="type here to search"/>
                <a href="/review"><span class="cart-count">2</span></a>
            </div>


        </div>
    );
};

export default Header;