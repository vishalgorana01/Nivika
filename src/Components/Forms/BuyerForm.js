import React from 'react'
import { Ref, useRef } from 'react';
import { Link } from 'react-router-dom';
import BuyerFooter from '../Footers/BuyerFooter'
import BuyerNavbar from '../Navbars/BuyerNavbar'

import { db } from '../../Components/Firebase/FirebaseConfiguration';
import { doc, updateDoc } from "firebase/firestore";

import styles from '../../Assets/CSS/BuyerForm.module.css';
let a = [];



export default function BuyerForm() {
    let name = useRef(null);
    let email = useRef(null);
    let phoneNo = useRef(null);
    let address = useRef(null);

    async function update() {
        // console.log("hi")
        console.log(name.current.value);
        console.log(email.current.value);
        console.log(phoneNo.current.value);
        console.log(address.current.value);

        const washingtonRef = doc(db, "users", JSON.parse(localStorage.getItem(1))[6]);

        await updateDoc(washingtonRef, {
            fullName: name.current.value,
            // email: email.current.value,
            phoneNos: phoneNo.current.value,
            address: address.current.value
        });

        alert("profile is updated");
    }

    return (
        <>
            <BuyerNavbar></BuyerNavbar>
            <section className={styles.section1}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                                <ol className="breadcrumb mb-0">
                                    <Link to={'/home'} style={{ margin: '0px 5px', textDecoration: 'none' }}><li className="breadcrumb-item"><a>Home</a></li></Link>
                                    <Link to={'/Bform'} style={{ margin: '0px 5px', textDecoration: 'none' }}><li className="breadcrumb-item"><a>go to back</a></li></Link>
                                    {/* <li className="breadcrumb-item active" aria-current="page">User Profile</li> */}
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px' }} />
                                    {/* <h5 className="my-3 username">{a[4]}</h5> */}
                                    <div className={styles.edit}><input type="text" placeholder='enter your name' /><i class="fa-solid fa-pencil"></i></div>
                                    <p className="text-muted mb-1">Product Seller</p>
                                    {/* <p className="text-muted mb-4 address1">{a[0]}</p> */}
                                    <div className={styles.edit}><input type="text" placeholder='address' /><i class="fa-solid fa-pencil"></i></div>
                                    <div className="d-flex justify-content-center mb-2">
                                        <button type="button" className="btn btn-primary">Follow</button>
                                        <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-4 mb-lg-0">
                                <div className="card-body p-0">
                                    <ul className="list-group list-group-flush rounded-3">
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fas fa-globe fa-lg text-warning" />
                                            <p className="mb-0">https://mdbootstrap.com</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fab fa-github fa-lg" style={{ color: '#333333' }} />
                                            <p className="mb-0">mdbootstrap</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }} />
                                            <p className="mb-0">@mdbootstrap</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }} />
                                            <p className="mb-0">mdbootstrap</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fab fa-facebook-f fa-lg" style={{ color: '#3b5998' }} />
                                            <p className="mb-0">mdbootstrap</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Full Name</p>
                                        </div>
                                        <div className="col-sm-9">
                                            {/* <p className="text-muted mb-0 username2">{a[4]}</p> */}
                                            <div className={styles.edit}><input type="text" placeholder='enter your name' ref={name} /><i class="fa-solid fa-pencil"></i></div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            {/* <p className="text-muted mb-0 useremail">{a[2]}</p> */}
                                            <div className={styles.edit}><input type="text" placeholder='enter your email' ref={email} /><i class="fa-solid fa-pencil"></i></div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Phone</p>
                                        </div>
                                        <div className="col-sm-9">
                                            {/* <p className="text-muted mb-0 contact1">{a[3]}</p> */}
                                            <div className={styles.edit}><input type="text" ref={phoneNo} /><i class="fa-solid fa-pencil"></i></div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Mobile</p>
                                        </div>
                                        <div className="col-sm-9">
                                            {/* <p className="text-muted contact2">{a[3]}</p> */}
                                            <div className={styles.edit}><input type="text" /><i class="fa-solid fa-pencil"></i></div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Address</p>
                                        </div>
                                        <div className="col-sm-9">
                                            {/* <p className="text-muted mb-0 address2">{a[0]}</p> */}
                                            <div className={styles.edit}><input type="text" placeholder='address' ref={address} /><i class="fa-solid fa-pencil"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.btn}><button onClick={update}>save</button></div>
                    </div>
                </div>
            </section>
            <BuyerFooter></BuyerFooter>
        </>
    )
}
