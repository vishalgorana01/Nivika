import React from 'react'
import { Link } from "react-router-dom";

// @import "rsuite/dist/rsuite.css";

import logo from '../../Assets/Images/nivika logo new wb.png';
// import Button from 'react-bootstrap/Button';
// import CategorySideBar from '../SideBars/CategorySideBar';

import styles from '../../Assets/CSS/BuyerNavbar.module.css';

const BuyerNavbar = (props) => {
    return (
        <>
            <section id={styles.section1}>
                <nav className={`navbar navbar-expand-lg navbar-light bg-light ${styles.nav}`}>
                    <div className={`container-fluid ${styles.container}`} style={{paddingRight: '30px'}}>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars"></i>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <a className="navbar-brand mt-2 mt-lg-0" href="/">
                                <img
                                    src={logo}
                                    height="60"
                                    alt="MDB Logo"
                                    loading="lazy"
                                />
                            </a>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/home">Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Contact us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Today's Deal</a>
                                </li>
                            </ul>
                        </div>

                        <div className="d-flex align-items-center">
                            <Link to={`/cart`}><a className="text-reset me-3" >
                                <i className="fas fa-shopping-cart"></i>
                            </a></Link>

                            <div className="dropdown">
                                <a
                                    className="text-reset me-3 dropdown-toggle hidden-arrow"
                                    href="/"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="fas fa-bell"></i>
                                    {/* <span className="badge rounded-pill badge-notification bg-danger">1</span> */}
                                </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="navbarDropdownMenuLink"
                                >
                                    <li>
                                        <a className="dropdown-item" href="/">Some news</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">Another news</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">Something else here</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="dropdown">
                               <Link to={`/Bprofile`}> <a
                                    className="dropdown-toggle d-flex align-items-center hidden-arrow"
                                    href="/"
                                    id="navbarDropdownMenuAvatar"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                        className="rounded-circle"
                                        height="25"
                                        alt="Black and White Portrait of a Man"
                                        loading="lazy"
                                    />
                                </a></Link>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="navbarDropdownMenuAvatar"
                                >
                                    <li>
                                        <a className="dropdown-item" href="/">My profile</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">Settings</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <nav className={styles.subnav}>
                    <div className={styles.divsubnav}>
                        <div>
                        <i class="fa-sharp fa-solid fa-caret-down"></i>
                        </div>
                        <div className={styles.search}>
                            <b>All</b>
                            <input type="text" />
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>

                        {/* <Button variant="primary">Primary</Button>{' '} */}
                        {/* <Button variant="primary">Primary</Button>{' '} */}
                    </div>
                </nav>
                {/* <div className={styles.container1}>
                    <CategorySideBar></CategorySideBar>
                </div> */}
            </section>
        </>
    )
}

export default BuyerNavbar