import React from 'react'
import item1 from '../../Components/CardsData/Item1';
import item2 from '../../Components/CardsData/Item2';
import item3 from '../../Components/CardsData/Item3';
import item4 from '../../Components/CardsData/Item4';

import img from '../../Assets/Images/nivika background.jpg';

import img1 from '../../Assets/Images/daily.png';
import img2 from '../../Assets/Images/daily2.png';
import img3 from '../../Assets/Images/daily3.png';
import img4 from '../../Assets/Images/daily4.png';
import img5 from '../../Assets/Images/daily5.png';


import { Link } from "react-router-dom";

import styles from '../../Assets/CSS/Categories.module.css';

export default function Categories() {
    const Category1 = item1.map(item => {
        // console.log(item);
        return (
            <div key={item.id}>
                <Link to={`/products/${item.id}`}>
                    <img className={styles.item1} src={item.img} alt="loading error" />
                </Link>
                {/* <p>Price: ${item.price}</p> */}
                <hr />
            </div>

        );
    });

    // console.log();

    const Category2 = item2.map(item => {
        return (
            <div key={item.id}>
                <Link to={`/products/${item.id}`}>
                    <img className={styles.item2} src={item.img} alt="loading error" />
                </Link>
                {/* <p>Price: ${item.price}</p> */}
                <hr />
            </div>

        );
    });

    const Category3 = item3.map(item => {
        // console.log(item.id);
        return (
            <div key={item.id}>
                <Link to={`/products/${item.id}`}>
                    <img className={styles.item3} src={item.img} alt="loading error" />
                </Link>
                {/* <p>Price: ${item.price}</p> */}
                <hr />
            </div>

        );
    });

    const Category4 = item4.map(item => {
        // console.log(item.id);
        return (
            <div key={item.id}>
                <Link to={`/products/${item.id}`}>
                    <img className={styles.item4} src={item.img} alt="loading error" />
                </Link>
                {/* <p>Price: ${item.price}</p> */}
                <hr />
            </div>

        );
    });

    return (
        <>
            <div className={styles.varities1}>
                <div>
                    <h4>Listed Item1</h4>
                    <Link to={`/Result`}><img src={img1} alt="error loading" /></Link>
                </div>

                <div>
                    <h4>Listed Item2</h4>
                    <Link to={`/Result`}><img src={img2} alt="error loading" /></Link>
                </div>

                <div className={styles.none}>
                    <h4>Listed Item3</h4>
                   <Link to={`/Result`}><img src={img3} alt="error loading" /></Link>
                </div>

                <div>
                    <h4>Listed Item4</h4>
                    <Link to={`/Result`}><img src={img4} alt="error loading" /></Link>
                </div>

            </div>

            <div className={styles.slider_container}>
                <h4>Category1</h4>
                <div className={styles.outer}>
                    <div className={styles.slider}>
                        {Category1}
                    </div>
                </div>
            </div>

            <div className={styles.slider_container}>
                <h4>Category2</h4>
                <div className={styles.outer}>
                    <div className={styles.slider}>
                        {Category2}
                    </div>
                </div>
            </div>

            
            <div className={styles.slider_container}>
                <h4>Category3</h4>
                <div className={styles.outer}>
                    <div className={styles.slider}>
                        {Category3}
                    </div>
                </div>
            </div>

            <div className={styles.varities1}>
                <div>
                    <h4>Listed Item1</h4>
                    <img src={img1} alt="error loading" />
                </div>

                <div>
                    <h4>Listed Item1</h4>
                    <img src={img2} alt="error loading" />
                </div>

                <div className={styles.none}>
                    <h4>Listed Item1</h4>
                    <img src={img3} alt="error loading" />
                </div>

                <div>
                    <h4>Listed Item1</h4>
                    <img src={img4} alt="error loading" />
                </div>

            </div>


            <div className={styles.slider_container}>
                <h4>Category4</h4>
                <div className={styles.outer}>
                    <div className={styles.slider}>
                        {Category4}
                    </div>
                </div>
            </div>


        </>
    )
}
