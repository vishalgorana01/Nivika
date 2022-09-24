import React from 'react'
import BuyerFooter from '../../Components/Footers/BuyerFooter'
import BuyerNavbar from '../../Components/Navbars/BuyerNavbar'

import seller_img from '../../Assets/Images/item (2).jpg'

import '../../Assets/CSS/SellerProfile.css';
import SellerNavbar from '../../Components/Navbars/SellerNavbar';

export default function SellerProfile() {
    return (
        <>
        <SellerNavbar></SellerNavbar>
        <div>
            <section className="h-100 gradient-custom-2" style={{backgroundColor: `rgb(216 212 204)`}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-9 col-xl-7">
                            <div className="card" style={{border: `none`}}>
                                <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#982339', height: '200px' }}>
                                    <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                                        <img src={seller_img} alt="error loading" className="img-fluid img-thumbnail mt-4 mb-2" style={{ width: '150px', zIndex: 1 }} />
                                        <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{ zIndex: `1`, backgroundImage: `linear-gradient(135deg, #982339, #9a6505)`, color: `white`}}>
                                            Edit profile
                                        </button>
                                    </div>
                                    <div className="ms-3" style={{ marginTop: '130px' }}>
                                        <h5>Andy Horwitz</h5>
                                        <p>New York</p>
                                    </div>
                                </div>
                                <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                                    <div className="d-flex justify-content-end text-center py-1">
                                        <div>
                                            Rate us
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-4 text-black">
                                    <div className="mb-5">
                                        {/* <p className="lead fw-normal mb-1">About</p> */}
                                        <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                            <p className="font-italic mb-1" style={{borderBottom: '1px solid black', padding: '7px 0px', margin: '7px 0px'}}>Your Orders</p>
                                            <p className="font-italic mb-1" style={{borderBottom: '1px solid black', padding: '7px 0px', margin: '7px 0px'}}>Change in Language</p>
                                            <p className="font-italic mb-0" style={{borderBottom: '1px solid black', padding: '7px 0px', margin: '7px 0px'}}>Help</p>
                                            <p className="font-italic mb-0" style={{borderBottom: '1px solid black', padding: '7px 0px', margin: '7px 0px'}}>Settings</p>
                                            <p className="font-italic mb-0" style={{borderBottom: '1px solid black', padding: '7px 0px', margin: '7px 0px'}}>Logout</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <p className="lead fw-normal mb-0">Recent photos</p>
                                        <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
                                    </div>
                                    <div className="row g-2">
                                        <div className="col mb-2">
                                            <img src={seller_img} alt="error loading" className="w-100 rounded-3" />
                                        </div>
                                        <div className="col mb-2">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp" alt="error loading" className="w-100 rounded-3" />
                                        </div>
                                    </div>
                                    <div className="row g-2">
                                        <div className="col">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp" alt="error loading" className="w-100 rounded-3" />
                                        </div>
                                        <div className="col">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp" alt="error loading" className="w-100 rounded-3" />
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
