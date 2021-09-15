/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { Usercontext } from '../../App';
const Header = ({login}) => {
    const [signInUser, setSingnInUser] = useContext(Usercontext);
    return (
        <div className="header">
            <img src={logo} alt=""/>

            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/manage">Manage inventory</Link>
            </nav>
            
            <div class="search-container">
                <input type="text" className="search-input" placeholder="type here to search"/>
                
                { 
                    signInUser.name?
                    <p style={{color:'#fff', display:"inline-block"}}>{signInUser.name}</p>:
                    <button onClick={login}>Sign in</button>

                }
                
                <Link to="/review"><span class="cart-count"><FontAwesomeIcon icon={faShoppingCart} /></span></Link>
            </div>


        </div>
    );
};

export default Header;