import React from 'react'
import { Link } from 'react-router-dom';
import BuyerFooter from '../Components/Footers/BuyerFooter';
import Services from '../Components/LandingSections/Services';
import Sponsor from '../Components/LandingSections/Sponsor';
import BuyerNavbar from '../Components/Navbars/BuyerNavbar';

import service_img1 from '../Assets/Images/service1.jpg'
import service_img2 from '../Assets/Images/service1.jpg'
import service_img3 from '../Assets/Images/service3.jpeg'

import styles from '../Assets/CSS/landingPage.module.css';

export default function Landing() {
    return (
        <>
            <BuyerNavbar></BuyerNavbar>
            <section className={styles.section1}>

            </section>
            <section className={styles.section2}>
                <div className={styles.container}>
                    <h2>Our Services</h2>
                    <div>
                        <div className={styles.card}>
                            <img src={service_img1} alt="error loading" />
                            <div className={styles.inner_div}>
                                <h5>Provides Goods</h5>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur ipsam labore delectus reiciendis quam sed, commodi dignissimos magni impedit!</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <img src={service_img2} alt="error loading" />
                            <div className={styles.inner_div}>
                                <h5>Provides Goods</h5>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur ipsam labore delectus reiciendis quam sed, commodi dignissimos magni impedit!</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <img src={service_img3} alt="error loading" />
                            <div className={styles.inner_div}>
                                <h5>Provides Goods</h5>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur ipsam labore delectus reiciendis quam sed, commodi dignissimos magni impedit!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section3}>
                <div className={styles.container3}>
                    <div className={styles.left}>
                        <div>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                            <h3>Lets starts your own business with us</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique doloremque fugiat pariatur, expedita quam eos error distinctio eveniet iste optio nesciunt quas placeat autem dolores nihil omnis minima sed? Repellendus?</p>
                           
                           <Link to={'/Sform'}> <button type='button' className={styles.btn}>Let's Start</button></Link>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div>
                            <img src={service_img1} alt="error loading" />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section4}>
                <h2>Latest Products</h2>
                <div className={styles.container4}>
                    <div className={styles.card4}>
                        <img src={service_img1} alt="error loading" />
                    </div>
                    <div className={styles.card4}>
                        <img src={service_img2} alt="error loading" />
                    </div>
                    <div className={styles.card4}>
                        <img src={service_img3} alt="error loading" />
                    </div>
                    <div className={styles.card4}>
                        <img src={service_img1} alt="error loading" />
                    </div>
                </div>
            </section>
            <BuyerFooter></BuyerFooter>
        </>

    )
}
