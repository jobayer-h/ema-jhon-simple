import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { Usercontext } from '../../App';
const Header = () => {
    const [signInUser, setSingnInUser] = useContext(Usercontext);
    // console.log(signInUser);
    return (
        <div className="header">
            <img src={logo} alt=""/>

            <nav>
                <Link href="/shop">Shop</Link>
                <Link href="/review">Order Review</Link>
                <Link href="/manage">Manage inventory</Link>
            </nav>
            
            <div class="search-container">
                <input type="text" className="search-input" placeholder="type here to search"/>
                <p style={{color:'#fff', display:"inline-block"}}>{signInUser.name}</p>
                <a href="/review"><span class="cart-count"><FontAwesomeIcon icon={faShoppingCart} /> 2</span></a>
            </div>


        </div>
    );
};

export default Header;