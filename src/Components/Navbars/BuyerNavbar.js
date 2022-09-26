import React from 'react'
import { Link } from "react-router-dom";

import { app, db, doc } from '../Firebase/FirebaseConfiguration.js';
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";


// @import "rsuite/dist/rsuite.css";

import logo from '../../Assets/Images/nivika logo new white.png';
// import Button from 'react-bootstrap/Button';
// import CategorySideBar from '../SideBars/CategorySideBar';

import styles from '../../Assets/CSS/BuyerNavbar.module.css';
import { async } from '@firebase/util';

const BuyerNavbar = (props) => {
   async function gets_profile_data(){

       let vishal = [];
       
       const q =  query(collection(db, "users"), where("email", "==", JSON.parse(localStorage.getItem(1))[2]));
       localStorage.clear();
          
            let given_address, given_cart, given_email, given_fullName, given_phoneNos, given_type, given_uid, given_wishlist;
            const querySnapshot = await getDocs(q);
            console.log(querySnapshot);
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              
              given_address = (doc.data()).address;
              if(given_address == ''){
                given_address = 'L-45, Santanio, Otiono';
              }
              vishal.push(given_address);
              console.log(given_address);
              
              given_cart = (doc.data()).cart;
              vishal.push(given_cart);
              console.log(given_cart);
        
              given_email = (doc.data()).email;
              if(given_email == ''){
                given_email = 'example@gmail.com';
              }
              vishal.push(given_email);
              console.log(given_email);
          
              given_phoneNos = (doc.data()).phoneNos;
              if(given_phoneNos == ""){
                given_phoneNos = "987-456-3494";
              }
              vishal.push(given_phoneNos);
              console.log(given_phoneNos);
          
              given_fullName = (doc.data()).fullName;
              if(given_fullName == ""){
                given_fullName = "name surname";
              }
              vishal.push(given_fullName);
              console.log(given_fullName);
          
              given_type = (doc.data()).type;
              vishal.push(given_type);
              console.log(given_type);
          
              given_uid = (doc.id);
              vishal.push(given_uid);
              console.log(given_uid);
          
              given_wishlist = (doc.data()).wishlist;
              vishal.push(given_wishlist);
              console.log(given_wishlist);
          
            //   Customer = new UserModel(given_address, given_cart, given_email, given_fullName, given_phoneNos, given_type, given_uid, given_wishlist);
            //   console.log(Customer);
              console.log("array", vishal);
              localStorage.clear();
              localStorage.setItem(1, JSON.stringify(vishal));

              window.location.reload();
          
          });

    }
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
                                    <a className="nav-link" href="/home" style={{color: 'white'}}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Result" style={{color: 'white'}}>Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{color: 'white'}}>Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{color: 'white'}}>Contact us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{color: 'white'}}>Today's Deal</a>
                                </li>
                            </ul>
                        </div>

                        <div className="d-flex align-items-center">
                            <Link to={`/cart`}><a className={`${styles.cart} text-reset me-3`}  style={{color: 'white !important'}}>
                                <i className="fas fa-shopping-cart"></i>
                            </a></Link>

                            <div className="dropdown" style={{color: 'white'}}>
                                <Link to={'/'}><button className={styles.logout}>logout</button></Link>
                            </div>
                            <div className="dropdown">
                               <Link to={`/Bprofile`} onClick={gets_profile_data}> <a
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
                                {/* <ul
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
                                </ul> */}
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