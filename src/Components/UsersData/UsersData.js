
import React from 'react'
import { app, db } from '../../Components/Firebase/FirebaseConfiguration';
import { collection, query, where, getDocs, doc, setDoc, updateDoc } from "firebase/firestore";

export default function UsersData() {
    class UserModel {
        uid;
        email;
        fullName;
        cart = [];
        wishlist = [];
        phoneNo;
        address;
        seller = false;

        UserModel(uid, email, fullName, cart, wishlist, phoneNo, address, seller) {

        }

    };

    async function user() {
        const q = query(collection(db, "users"), where("email", "==", "dev@gmail.com"));
        console.log(q);

        let a;
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            a = doc.id;
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });

        console.log(a);

        const washingtonRef = doc(db, "users", `${a}`);

        await updateDoc(washingtonRef, {
            fullName: "Vishal Gorana"
        });
    }

    return (
        <div><button onClick={user}>User Data</button></div>
    )
}




