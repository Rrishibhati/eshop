import React from 'react';
import './Header.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from './DataLayer/StateProvider';
import { isLogin, SignOut } from './DataLayer/reducer';

function Header() {
    const [{ basket }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const handleSignOut = () => {
        SignOut();
        if (!isLogin()) {
            navigate('/login');
            return;
        }
        alert('Something went wrong refresh & try again');
    }

    return (
        <div className='header'>
            <Link to="/" style={{ textDecoration: 'none' }} >
                <div className='header-logo'>
                    <StorefrontIcon className='header-logo-icon' />
                    <span className="header-logo-title">eShop</span>
                </div>
            </Link>
            <div className="header-search">
                <input className="header-search-input" />
                <SearchIcon className="header-search-icon" />
            </div>

            <div className="header-nav">
                <div className="header-nav-item">
                    <ShoppingBasketIcon className="item-line-one" />
                    <span className="item-line-two">{basket.length}</span>
                </div>
                <Link to="/checkout" style={{ textDecoration: 'none' }} >
                    <div className="header-nav-item">
                        <ShoppingCartIcon className="item-line-one" />
                        <span className="item-line-two">Cart</span>
                    </div>
                </Link>
                <div className="header-nav-item" onClick={handleSignOut}>
                    <ExitToAppIcon className='item-line-one' />
                    <span className="item-line-two">SignOut</span>
                </div>
            </div>
        </div>
    )
}

export default Header