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

import { db } from '../../Components/Firebase/FirebaseConfiguration.js';
import { collection, query, where, getDocs } from "firebase/firestore";
import { useRouteLoaderData } from 'react-router-dom';

// import {SignUp} from '../SignUp.js';
// console.log(SignUp);

let user_data;
let name, address, conctact, email;

async function put_data() {

    const q = query(collection(db, "users"), where("email", "==", localStorage.getItem(7)));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        //   doc.data() is never undefined for query doc snapshots
        //   console.log(doc.id, " => ", doc.data());
        user_data = doc.data();
        console.log(user_data.email);
        name = user_data.fullName;
        document.querySelector(".username1").innerHTML = name;
        document.querySelector(".username2").innerHTML = name;

        email = user_data.email;
        document.querySelector(".useremail").innerHTML = email;

        address = user_data.address;
        document.querySelector(".address1").innerHTML = address;
        document.querySelector(".address2").innerHTML = address;

        conctact = user_data.conctact;
        document.querySelector(".contact1").innerHTML = conctact;
        document.querySelector(".contact2").innerHTML = conctact;

    });
}

let a = JSON.parse(localStorage.getItem(1));

if(a == null){
    a = ['l-45, yavnas, Orthio', [],'example@gmail.com', '345-987-23', 'Franchi Pouris', [], 'HPMDFK983YBMC9RKR9U9',[]];
}

export default function BuyerProfile() {
    // localStorage.clear();
    return (
        <>
            <BuyerNavbar></BuyerNavbar>
            <div>
                <section style={{ backgroundColor: `rgb(216, 212, 204)` }}>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col">
                                <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item"><a onClick={put_data}>Home</a></li>
                                        {/* <li className="breadcrumb-item"><a href="/">User</a></li> */}
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
                                        <h5 className="my-3 username">{a[4]}</h5>
                                        <p className="text-muted mb-1">Product Seller</p>
                                        <p className="text-muted mb-4 address1">{a[0]}</p>
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
                                                <p className="text-muted mb-0 username2">{a[4]}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Email</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0 useremail">{a[2]}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Phone</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0 contact1">{a[3]}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Mobile</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted contact2">{a[3]}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Address</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0 address2">{a[0]}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="row"> */}
                                    {/* <div className="col-md-6">
                                        <div className="card mb-4 mb-md-0">
                                            <div className="card-body">
                                                <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                                                </p> */}

                                                {/* <MDBCard className={styles.card}>
                                                    <MDBCardImage src={card_image} alt='error loading' position='top' />
                                                    <MDBCardBody>
                                                        <MDBCardText>
                                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                                        </MDBCardText> 
                                                    </MDBCardBody>
                                                </MDBCard>

                                                <MDBCard className={styles.card}>
                                                    <MDBCardImage src={card_image} alt='error loading' position='top' />
                                                    <MDBCardBody>
                                                        <MDBCardText>
                                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                                        </MDBCardText> 
                                                    </MDBCardBody>
                                                </MDBCard>

                                                <MDBCard className={styles.card}>
                                                    <MDBCardImage src={card_image} alt='error loading' position='top' />
                                                    <MDBCardBody>
                                                        <MDBCardText>
                                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                                        </MDBCardText>
                                                    </MDBCardBody>
                                                </MDBCard>

                                                <MDBCard className={styles.card}>
                                                    <MDBCardImage src={card_image} alt='error loading' position='top' />
                                                    <MDBCardBody>
                                                        <MDBCardText>
                                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                                        </MDBCardText>
                                                    </MDBCardBody>
                                                </MDBCard>

                                                <MDBCard className={styles.card}>
                                                    <MDBCardImage src={card_image} alt='error loading' position='top' />
                                                    <MDBCardBody>
                                                        <MDBCardText>
                                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                                        </MDBCardText>
                                                    </MDBCardBody>
                                                </MDBCard>

                                                <MDBCard className={styles.card}>
                                                    <MDBCardImage src={card_image} alt='error loading' position='top' />
                                                    <MDBCardBody>
                                                        <MDBCardText>
                                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                                        </MDBCardText>
                                                    </MDBCardBody>
                                                </MDBCard>

                                                <MDBCard className={styles.card}>
                                                    <MDBCardImage src={card_image} alt='error loading' position='top' />
                                                    <MDBCardBody>
                                                        <MDBCardText>
                                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                                        </MDBCardText>
                                                    </MDBCardBody>
                                                </MDBCard> */}

                                            {/* </div>
                                        </div>
                                    </div> */}
                                    {/* <div className="col-md-6">
                                        <div className="card mb-4 mb-md-0">
                                            <div className="card-body">
                                                <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                                                </p>
                                                <p className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                                                <div className="progress rounded" style={{ height: '5px' }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</p>
                                                <div className="progress rounded" style={{ height: '5px' }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</p>
                                                <div className="progress rounded" style={{ height: '5px' }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</p>
                                                <div className="progress rounded" style={{ height: '5px' }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</p>
                                                <div className="progress rounded mb-2" style={{ height: '5px' }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <BuyerFooter></BuyerFooter>
        </>
    )
}
