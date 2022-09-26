import React from 'react';
import { useParams } from "react-router-dom";

import item1 from '../../Components/CardsData/Item1';
import item2 from '../../Components/CardsData/Item2';
import item3 from '../../Components/CardsData/Item3';
import item4 from '../../Components/CardsData/Item4';

import styles from '../../Assets/CSS/Product.module.css';

// import img from '../../Assets/Images/c2.png';
import BuyerNavbar from '../../Components/Navbars/BuyerNavbar';
import BuyerFooter from '../../Components/Footers/BuyerFooter';

import { db } from '../../Components/Firebase/FirebaseConfiguration.js';
import { doc, updateDoc, collection, query, where, getDocs } from "firebase/firestore";

let prod;




export default function Product() {
    async function addCart(event, img, price, name) {
        let cart =
        {
            img: img,
            category: '',
            name: name,
            price: price,
        };

        console.log(cart);

        // get data
        const q = query(collection(db, "users"), where("email", "==", JSON.parse(localStorage.getItem(1))[2]));

        let newCart = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            newCart = (doc.data()).cart;
        });

        newCart.push(cart);

        // update data

        const washingtonRef = doc(db, "users", JSON.parse(localStorage.getItem(1))[6]);

        // Set the "capital" field of the city 'DC'
        await updateDoc(washingtonRef, {
            cart: newCart,
        });

        let vishal = [];
        const updated_q = query(collection(db, "users"), where("email", "==", JSON.parse(localStorage.getItem(1))[2]));
        // localStorage
        let given_address, given_cart, given_email, given_fullName, given_phoneNos, given_type, given_uid, given_wishlist;

        const updated_querySnapshot = await getDocs(updated_q);
        updated_querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());

            given_address = (doc.data()).address;
            if (given_address == '') {
                given_address = 'L-45, Santanio, Otiono';
            }
            vishal.push(given_address);
            console.log(given_address);

            given_cart = (doc.data()).cart;
            vishal.push(given_cart);
            console.log(given_cart);

            given_email = (doc.data()).email;
            if (given_email == '') {
                given_email = 'example@gmail.com';
            }
            vishal.push(given_email);
            console.log(given_email);

            given_phoneNos = (doc.data()).phoneNos;
            if (given_phoneNos == "") {
                given_phoneNos = "987-456-3494";
            }
            vishal.push(given_phoneNos);
            console.log(given_phoneNos);

            given_fullName = (doc.data()).fullName;
            if (given_fullName == "") {
                given_fullName = "name surname";
            }
            vishal.push(given_fullName);
            console.log(given_fullName);

            given_type = (doc.data()).type;
            vishal.push(given_type);
            console.log(given_type);

            given_uid = (doc.id);
            vishal.push(given_uid);
            console.log(given_uid);

            given_wishlist = (doc.data()).wishlist;
            vishal.push(given_wishlist);
            console.log(given_wishlist);

            console.log("array", vishal);
            localStorage.clear();
            localStorage.setItem(1, JSON.stringify(vishal));
        });



        console.log("hi");
        console.log(event.target.innerHTML);
        console.log(img);
        console.log(price);
        console.log(name);
        // return cartItem;
    }
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
                        <p style={{ textAlign: 'start' }}>{prod.description}</p>
                        <div>
                            <b>Rs.{prod.price}</b>
                            <br />
                            <label htmlFor="Quantity">Qtn : &nbsp; <input type="number" min={0} /></label>

                            <div>
                                <button className={styles.btn}>Buy now</button>
                                <button onClick={e => addCart(e, prod.img, prod.price, prod.name)} className={styles.btn}>Add cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.description}>
                    <h3>description</h3>
                    <p className={styles.display_none} style={{ textAlign: 'start' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus placeat autem quibusdam dignissimos voluptate itaque ratione iusto! Quos tempore architecto praesentium soluta. Porro repudiandae provident nesciunt iusto vel accusamus eos at optio natus, aut numquam cumque voluptatem, dolore totam repellendus reiciendis voluptate quod nulla! Qui officiis saepe ad commodi? Est obcaecati quos eius quia ea eligendi doloribus accusantium maxime ab quisquam dolorum fugiat, sed dolore architecto corrupti rerum tempore assumenda. Sequi, reiciendis quae voluptatibus sed ea est repellendus amet doloribus? Dignissimos earum voluptatibus illum, nulla non ut laudantium saepe est.</p>

                    <p className={styles.half_display} styles={{ textAlign: 'start' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus placeat autem quibusdam dignissimos voluptate itaque ratione iusto! Quos tempore architecto praesentium soluta. Porro repudiandae provident nesciunt iusto vel accusamus eos at optio natus, aut numquam cumque voluptatem... <a href='/'>Read More</a></p>

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
