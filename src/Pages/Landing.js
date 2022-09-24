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
import GuestNavbar from '../Components/Navbars/GuestNavbar';

export default function Landing() {
    return (
        <>
            <GuestNavbar></GuestNavbar>
            <section className={styles.section1}>

            </section>
            <section className={styles.section2}>
                <div className={styles.container}>
                    <h2>Our Services</h2>
                    <div>
                        <div className={styles.card}>
                            <img src={service_img1} alt="error loading" />
                            <div className={styles.inner_div}>
                                <h5>Unified Platform</h5>
                                <div>
                                    <p>Nivika is unified platform which brings people systems and data together to form a collaborative, efficient ecosystem to get the right treatment, to the right customers as well as to the sellers at the right time</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <img src={service_img2} alt="error loading" />
                            <div className={styles.inner_div}>
                                <h5>Provides Equipments</h5>
                                <div>
                                    <p>We provide a unique culture experience for our employees that evolves each day. It is our goal to ensure our employees are self-paced productive business partners, creating an inclusive culture of diversity, understanding, engagement and opportunity.</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <img src={service_img3} alt="error loading" />
                            <div className={styles.inner_div}>
                                <h5>Provides Employments</h5>
                                <div>
                                    <p>NIVIKA is an employment platform. We engage women who desire to be self-sufficient and powerful by earning their own money. We at NIVIKA build the groundwork for women to realise their goals.</p>
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

            {/* <section className={styles.section5}>{
                <div className={styles.container5}>
                    <div className={styles.left5}>
                        <button className={styles.btn}>Sign in</button>
                    </div>
                    <div className={styles.right5}>
                        <button className={styles.btn}>As a Guest</button>
                    </div>
                </div>
            }

            </section> */}
            <BuyerFooter></BuyerFooter>
        </>

    )
}
