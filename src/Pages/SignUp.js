import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';

import { app, db, doc } from '../Components/Firebase/FirebaseConfiguration';

// ****** firebase authentication *********
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth";

// ************* firebase firestore *********************
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

import styles from '../Assets/CSS/SignUp.module.css';
import BuyerNavbar from '../Components/Navbars/BuyerNavbar';

// console.log(app);
// console.log(getAuth);
let Customer;

  class UserModel {
      uid;
      email;
      fullName;
      cart = [];
      wishlist = [];
      phoneNo;
      address;
      type = false;

      UserModel(given_address, given_cart, given_email, given_fullName, given_phoneNo, given_type, given_uid, given_wishlist) {
        this.address = given_address;
        this.cart = given_cart;
        this.email = given_email;
        this.fullName = given_fullName;
        this.phoneNo = given_phoneNo;
        this.wishlist = given_wishlist;
        this.type = given_type;
        this.uid = given_uid;

      }

  };

// ******************** Google login ***********************
function google_login() {
  let provider = new GoogleAuthProvider;
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

}

// ********* facebook login ********
function facebook_login() {
  let provider = new FacebookAuthProvider;
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      // ...
    });

}

// ********* twitter login *************
function twitter_login() {
  let provider = new TwitterAuthProvider;

  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
      // You can use these server side with your app's credentials to access the Twitter API.
      const credential = TwitterAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const secret = credential.secret;

      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = TwitterAuthProvider.credentialFromError(error);
      // ...
    });

}

// ***************************************************

// *********************************

let email;
async function upload_file(email) {

  // Add a new document with a generated id.
  const docRef = addDoc(collection(db, "users"), {
    address: "",
    cart: [],
    email: email,
    fullName: "",
    phoneNos: "",
    type: "",
    uid: "",
    wishlist: []
  });
  console.log("Document written with ID: ", docRef.id);
};

// async function UserData(email){
//   console.log(email);
//   console.log(typeof(email))
//   const q =  query(collection(db, "users"), where("email", "==", email));

//   let given_address, given_cart, given_email, given_fullName, given_phoneNos, given_type, given_uid, given_wishlist;
//   const querySnapshot = await getDocs(q);
//   console.log(querySnapshot);
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//     given_address = (doc.data()).address;
//     console.log(given_address);

//     given_cart = (doc.data()).cart;
//     console.log(given_cart);

//     given_email = (doc.data()).email;
//     console.log(given_email);

//     given_phoneNos = (doc.data()).phoneNos;
//     console.log(given_phoneNos);

//     given_fullName = (doc.data()).fullName;
//     console.log(given_fullName);

//     given_type = (doc.data()).type;
//     console.log(given_type);

//     given_uid = (doc.data()).uid;
//     console.log(given_uid);

//     given_wishlist = (doc.data()).wishlist;
//     console.log(given_wishlist);

//     Customer = new UserModel(given_address, given_cart, given_email, given_fullName, given_phoneNos, given_type, given_uid, given_wishlist);

// });
// }

let vishal = [];


export default  function SignUp() {

  async function UserData(email){
    console.log(email);
    console.log(typeof(email))
    const q =  query(collection(db, "users"), where("email", "==", email));
  
    let given_address, given_cart, given_email, given_fullName, given_phoneNos, given_type, given_uid, given_wishlist;
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      given_address = (doc.data()).address;
      vishal.push(given_address);
      console.log(given_address);
  
      given_cart = (doc.data()).cart;
      vishal.push(given_cart);
      console.log(given_cart);
  
      given_email = (doc.data()).email;
      vishal.push(given_email);
      console.log(given_email);
  
      given_phoneNos = (doc.data()).phoneNos;
      vishal.push(given_phoneNos);
      console.log(given_phoneNos);
  
      given_fullName = (doc.data()).fullName;
      vishal.push(given_fullName);
      console.log(given_fullName);
  
      given_type = (doc.data()).type;
      vishal.push(given_type);
      console.log(given_type);
  
      given_uid = (doc.data()).uid;
      vishal.push(given_uid);
      console.log(given_uid);
  
      given_wishlist = (doc.data()).wishlist;
      vishal.push(given_wishlist);
      console.log(given_wishlist);
  
      Customer = new UserModel(given_address, given_cart, given_email, given_fullName, given_phoneNos, given_type, given_uid, given_wishlist);
      console.log(Customer);
      console.log("array", vishal);
      localStorage.clear();
      localStorage.setItem(1, JSON.stringify(vishal));
  
  });
  }


  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    // console.log(value);

    setJustifyActive(value);
  };

  function handleSignUp() {

    email = document.querySelector('#email').value;
    // console.log(email);
    // localStorage.setItem(7, email);
    
    let password = document.querySelector("#password").value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    
    upload_file(email);
    console.log(password);

  }



  async function handleLogin(e){
    e.preventDefault();
    let email = document.querySelector('#login_email').value;
    console.log(email);

    // localStorage.setItem(7,email);
    let password = document.querySelector("#login_password").value;
    console.log(password);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        UserData(email);
        alert("login successful");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });

  }

  return (
    <>
    <div className={styles.section}>
      <MDBContainer className={`${styles.form} form p-3 my-5 d-flex flex-column w-50`} style={{ maxWidth: '400px !important' }}>

        <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
              SignIn
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
              SignUp
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>

          <MDBTabsPane show={justifyActive === 'tab1'}>

            <div className="text-center mb-3">
              <p>Sign in with:</p>

              <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon onClick={facebook_login} fab icon='facebook-f' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon onClick={twitter_login} fab icon='twitter' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon onClick={google_login} fab icon='google' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm" />
                </MDBBtn>
              </div>

              <p className="text-center mt-3">or:</p>
            </div>

            <MDBInput wrapperClass='mb-4' label='Email address' id='login_email' type='email' />
            <MDBInput wrapperClass='mb-4' label='Password' id='login_password' type='password' />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="!#">Forgot password?</a>
            </div>

            <a href='/SignUp'><MDBBtn onClick={handleLogin} className="mb-4 w-100">Sign in</MDBBtn></a>
            {/* <p className="text-center">Not a member? <a href="#!">Register</a></p> */}

          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === 'tab2'}>

            <div className="text-center mb-3">
              <p>Sign up with:</p>

              <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm" />
                </MDBBtn>
              </div>

              <p className="text-center mt-3">or:</p>
            </div>


            <MDBInput wrapperClass='mb-4' label='Email' id='email' type='email' />
            <MDBInput wrapperClass='mb-4' label='Enter Password' id='password' type='password' />
            <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form1' type='password' />


            <div className='d-flex justify-content-center mb-4'>
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
            </div>

            <MDBBtn onClick={handleSignUp} className="mb-4 w-100">Sign up</MDBBtn>

          </MDBTabsPane>

        </MDBTabsContent>

      </MDBContainer>
    </div>
    </>
  );
}



