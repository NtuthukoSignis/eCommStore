import React, { useState} from 'react'
import NaviBar from '../../components/navigation/NaviBar'
import Footer from '../../components/header_footer/Footer'
import Validation from './Validation';
import AuthForm from '../../components/reusable/AuthForm';
import { RoutesObj } from '../../routes/AllRoutes';
import { useNavigate } from 'react-router';
import image7 from '../../assets/images/back5.jpg';
import { useAuth } from '../../firebase/FirebaseAuthHook';

// google button
// Anonymous button
// form ---> email & password input
// form validation


export default function SignIn() {
 
  // ----New Info Add User ------------------------------------------------------------>>
  const {CreateNewUser, LoginEmailPassword, SignInAnon, SignInWithGoogle, GetAuthState} = useAuth();
  let navigation = useNavigate();

 function submitSignIn(email, password){
  console.log("email & Password", email, password)

  LoginEmailPassword(email, password)
  .then((userCredential) => {
    //Sign In
    const user = userCredential.user;
    console.log("Signed in successfully ", user);

    // ----New Info Add User ------------------------------------------------------------>>
    CreateNewUser(user.uid, user).then(() => {
      navigation(RoutesObj.visiual.home.path, { replace: true });
    });
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("ERROR occured: ", errorCode, errorMessage);
  });
}

// Sign in with a google account
function googleSignIn() {
  SignInWithGoogle()
  .then((result) => {

    // Gives you a Google Access Token which can be used to access the Google API
    const user = result.user;
    console.log("SIGNIN Success ", user)

    //----New Info Add User ------------------------------------------------------------>>
    CreateNewUser(user.uid, user).then(() => {
      navigation(RoutesObj.visiual.home.path, { replace: true }); 
    });

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

  })
}

function signInAnonimously(){
//----New Info Add User ------------------------------------------------------------>>
 SignInAnon()
 .then((result) => {
   const user = result.user;

   CreateNewUser(user.uid, user).then(() => {
   navigation(RoutesObj.visiual.home.path, { replace: true });
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("ERROR occured: ", errorCode, errorMessage);
  });
}


  return (
    <div>
      <div className="NaviBar">
        <NaviBar/>
      </div>
    
      <div><h2 className="headings">Sign In</h2>
      <h4 className="headings">Already a member of the Mzansi Sprt family? You can login below</h4></div>
    
      <div className="container">
        <div>
        <AuthForm type='Sign In' onAunthentication={(email, password) => submitSignIn(email, password)} />
        </div>

        <div className="sign-container">
          <button className="add-button" onClick={() => googleSignIn()}>Sign In using Google account</button>
          <button className="add-button" onClick={() => signInAnonimously()}>Sign In Anonymous</button>
        </div>
      </div>
      
      <div className="App-footer">
        <Footer/>
      </div>

    </div>
  );
}
