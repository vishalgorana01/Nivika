import React from 'react'

import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardImage
} from 'mdb-react-ui-kit';

import styles from '../../Assets/CSS/BuyerProfile.module.css';

// import card_image from '../../Assets/Images/item (2).jpg'

import BuyerFooter from '../../Components/Footers/BuyerFooter'
import BuyerNavbar from '../../Components/Navbars/BuyerNavbar'

// import { db } from '../../Components/Firebase/FirebaseConfiguration.js';
// import { collection, query, where, getDocs } from "firebase/firestore";
import { Link } from 'react-router-dom';


export default function BuyerProfile() {

    return (
        <>
            <BuyerNavbar></BuyerNavbar>
            <div>
                <section style={{ backgroundColor: `rgb(216, 212, 204)`, width: '100vw' }}>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col">
                                <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item"><a href='home'>Home</a></li>
                                        <Link to={'/Bform'} style={{ margin: '0px 5px', textDecoration: 'none' }}><li className="breadcrumb-item"><a>edit</a></li></Link>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card mb-4">
                                    <div className="card-body text-center">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px' }} />
                                        <h5 className="my-3 username">{JSON.parse(localStorage.getItem(1))[4]}</h5>
                                        <p className="text-muted mb-1">Product Seller</p>
                                        <p className="text-muted mb-4 address1">{JSON.parse(localStorage.getItem(1))[0]}</p>
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
                                                <p className="text-muted mb-0 username2">{JSON.parse(localStorage.getItem(1))[4]}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Email</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0 useremail">{JSON.parse(localStorage.getItem(1))[2]}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Phone</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0 contact1">{JSON.parse(localStorage.getItem(1))[3]}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Mobile</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted contact2">{JSON.parse(localStorage.getItem(1))[3]}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Address</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0 address2">{JSON.parse(localStorage.getItem(1))[0]}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <BuyerFooter></BuyerFooter>
        </>
    )
}
