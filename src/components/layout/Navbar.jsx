import React from "react";
import logo_01 from '../../assets/images/icons/logo-01.png'

export function Narbar() {
    return (
        <div className="how-shadow1">
            <nav className="limiter-menu-desktop container">
                {/* Logo desktop */}
                <a href="#" className="logo">
                    <img src={logo_01} alt="IMG-LOGO" />
                </a>
                {/* Menu desktop */}
                <div className="menu-desktop">
                    <ul className="main-menu">
                        <li>
                            <a href="index.html">Home</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="index.html">Homepage 1</a>
                                </li>
                                <li>
                                    <a href="home-02.html">Homepage 2</a>
                                </li>
                                <li>
                                    <a href="home-03.html">Homepage 3</a>
                                </li>
                            </ul>
                        </li>
                        <li className="active-menu">
                            <a href="product.html">Shop</a>
                        </li>
                        <li className="label1" data-label1="hot">
                            <a href="shoping-cart.html">Features</a>
                        </li>
                        <li>
                            <a href="blog.html">Blog</a>
                        </li>
                        <li>
                            <a href="about.html">About</a>
                        </li>
                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
                {/* Icon header */}
                <div className="wrap-icon-header flex-w flex-r-m">
                    <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                        <i className="zmdi zmdi-search" />
                    </div>
                    <div
                        className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                        data-notify={2}
                    >
                        <i className="zmdi zmdi-shopping-cart" />
                    </div>
                    <a
                        href="#"
                        className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                        data-notify={0}
                    >
                        <i className="zmdi zmdi-favorite-outline" />
                    </a>
                </div>
            </nav>
        </div>
    )
}