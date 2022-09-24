import React from 'react'
import BuyerNavbar from '../Components/Navbars/BuyerNavbar'
// import CategorySideBar from '../Components/SideBars/CategorySideBar'

import styles from '../Assets/CSS/Home.module.css';
// import Categories from './Buyer/Categories';
import BuyerFooter from '../Components/Footers/BuyerFooter';
import Categories from './Buyer/Categories';

export default function Home() {
  return (
    <>
    <BuyerNavbar/>
    <section id={styles.section1}>
      <div className={styles.container1}>
      </div>
    </section>
    <Categories></Categories>
    <BuyerFooter></BuyerFooter>
    </>
  )
}
