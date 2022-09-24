import React from 'react';
import styles from '../../Assets/CSS/SellerForm.module.css';

import { app, db, doc } from '../../Components/Firebase/FirebaseConfiguration.js';
import { collection, addDoc } from "firebase/firestore"; 
import { Link } from 'react-router-dom';


export default function SellerForm() {
    function submitbtn(){
        let ele = document.querySelector(".Bform");
        let fullName = (ele.children[0].children[0].value);

        let email = (ele.children[1].children[0].value);
        // localStorage.setItem(7, email);

        let age = (ele.children[2].children[0].value);
        let contactno = (ele.children[3].children[0].value);
        let Adharno = (ele.children[4].children[0].value);
        let add = (ele.children[5].children[0].value);

        const docRef = addDoc(collection(db, "users"), {
            address: add,
            cart: [],
            email: email,
            fullName: fullName,
            phoneNos: contactno,
            type: "",
            uid: "",
            wishlist: []
          });
          console.log("Document written with ID: ", docRef.id);
    }

  return (
    <div className={styles.container}>
        <div><h3>Your Identity Card</h3></div>
        <form action="" className="Bform">
            <label htmlFor="">Full name : &nbsp; <input type="text" placeholder='yogi nath'/></label>
            <label htmlFor="">email : &nbsp; <input type="email" placeholder='example34@gmail.com'/></label>
            <label htmlFor="">age : &nbsp; <input type="number" min={20} placeholder=''/></label>
            <label htmlFor="">Contact no. : &nbsp; +91 &nbsp;<input type="number" placeholder=''/></label>
            <label htmlFor="">Adhar no. : &nbsp; <input type="text" placeholder=''/></label>
            {/* <label htmlFor=""> : &nbsp; <input type="text" placeholder='yogi nath'/></label> */}
            <label htmlFor="">address : &nbsp; <input type="text" placeholder='l-45, aadarsh nagar, Bhopal'/></label>
        </form>
        <Link to={'/Sprofile'}><div><button type='button' onClick={submitbtn} className={styles.btn}>Save</button></div></Link>
    </div>
  )
}
