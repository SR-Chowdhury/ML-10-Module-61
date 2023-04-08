import React from 'react';
import './Header.css';
import logo from '../../assets/images/Logo.svg';
import './Responsive.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" />
                </a>
                <button className="navbar-toggler navbar-toggler-Ema-john" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav navbar-nav-Ema-john ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/orders">Order Review</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/inventory">Manage Inventory</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

};

export default Header;