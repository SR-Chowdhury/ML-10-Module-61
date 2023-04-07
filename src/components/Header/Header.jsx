import React from 'react';
import './Header.css';
import logo from '../../assets/images/Logo.svg';
import './Responsive.css';

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
                            <a className="nav-link" aria-current="page" href="#">Order</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Order Review</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Manage Inventory</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

};

export default Header;