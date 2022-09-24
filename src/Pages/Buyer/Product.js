import React from 'react';
import { useParams } from "react-router-dom";

import item1 from '../../Components/CardsData/Item1';
import item2 from '../../Components/CardsData/Item2';
import item3 from '../../Components/CardsData/Item3';
import item4 from '../../Components/CardsData/Item4';

import styles from '../../Assets/CSS/Product.module.css';

import img from '../../Assets/Images/c2.png';
import BuyerNavbar from '../../Components/Navbars/BuyerNavbar';
import BuyerFooter from '../../Components/Footers/BuyerFooter';

let prod;

function addCart(cartItem){
    console.log("hi");
    console.log(cartItem);
    // return cartItem;
}

export default function Product() {
    const { ItemId } = useParams();
    // console.log(ItemId[1]);

    let thisItem = item1.find(product => product.id === ItemId);
    if (thisItem !== undefined) {
        prod = thisItem;
        // console.log(thisItem);
        // console.log(thisItem.description);
        // console.log(thisItem.img);
        // console.log(thisItem.id);
        // console.log(thisItem.price);
    }

    thisItem = item2.find(product => product.id === ItemId);
    if (thisItem !== undefined) {
        prod = thisItem;
        // console.log(thisItem);
    }

    thisItem = item3.find(product => product.id === ItemId);
    if (thisItem !== undefined) {
        prod = thisItem;
        // console.log(thisItem);
        
    }

    thisItem = item4.find(product => product.id === ItemId);
    if (thisItem !== undefined) {
        prod = thisItem;
        // console.log(thisItem);
    }

    return (
        <>
            <BuyerNavbar></BuyerNavbar>
            <section className={styles.section1}>
                <div className={styles.container1}>
                    <div className={styles.left}>
                        <img src={prod.img} alt="error loading" />
                        <div className={styles.relative_images}>
                            <img src={prod.img} alt="error loading" />
                            <img src={prod.img} alt="error loading" />
                            <img src={prod.img} alt="error loading" />
                            <img src={prod.img} alt="error loading" />
                            <img src={prod.img} alt="error loading" />
                            <img src={prod.img} alt="error loading" />
                            <img src={prod.img} alt="error loading" />
                            <img src={prod.img} alt="error loading" />
                            <img src={prod.img} alt="error loading" />
                            <img src={prod.img} alt="error loading" />
                            <img src={prod.img} alt="error loading" />
                        </div>
                    </div>
                    <div className={styles.right}>
                        <h3>{prod.name}</h3>
                        <p style={{textAlign: 'start'}}>{prod.description}</p>
                        <div>
                            <b>Rs.{prod.price}</b>
                            <br/>
                            <label htmlFor="Quantity">Qtn : &nbsp; <input type="number" min={0} /></label>
                            
                            <div>
                                <button className={styles.btn}>Buy now</button>
                                <button onClick={addCart({prod})} className={styles.btn}>Add cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.description}>
                    <h3>description</h3>
                    <p className={styles.display_none} style={{textAlign: 'start'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus placeat autem quibusdam dignissimos voluptate itaque ratione iusto! Quos tempore architecto praesentium soluta. Porro repudiandae provident nesciunt iusto vel accusamus eos at optio natus, aut numquam cumque voluptatem, dolore totam repellendus reiciendis voluptate quod nulla! Qui officiis saepe ad commodi? Est obcaecati quos eius quia ea eligendi doloribus accusantium maxime ab quisquam dolorum fugiat, sed dolore architecto corrupti rerum tempore assumenda. Sequi, reiciendis quae voluptatibus sed ea est repellendus amet doloribus? Dignissimos earum voluptatibus illum, nulla non ut laudantium saepe est.</p>

                    <p className={styles.half_display} styles={{textAlign: 'start'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus placeat autem quibusdam dignissimos voluptate itaque ratione iusto! Quos tempore architecto praesentium soluta. Porro repudiandae provident nesciunt iusto vel accusamus eos at optio natus, aut numquam cumque voluptatem... <a href='/'>Read More</a></p>

                    <h5>Features</h5>
                    <ul>
                        <li>{prod.f1}</li>
                        <li>{prod.f2}</li>
                        <li>{prod.f3}</li>
                        <li>{prod.f4}</li>
                        <li>{prod.f5}</li>
                    </ul>
                </div>
            </section>
            <BuyerFooter></BuyerFooter>
        </>
    )
}
