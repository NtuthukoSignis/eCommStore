import React, { useState } from 'react'
import NaviBar from '../../components/navigation/NaviBar'
import Footer from '../../components/header_footer/Footer'
import Validation from './Validation';
import AuthForm from '../../components/reusable/AuthForm';
import { useAuth } from '../../firebase/FirebaseAuthHook';
import { useNavigate } from 'react-router';
import { RoutesObj } from '../../routes/AllRoutes';


// form
// email & password
// Bonus ----> ensure add confirm password field
// Stop user from using a sign up if passowrd do not match
// form validation


export default function SignUp() {

  const {CreateNewUser, LoginEmailPassword, SignInAnon, SignInWithGoogle, GetAuthState, RegisterEmailPassword} = useAuth();
  let navigation = useNavigate();

  function submitSignUp(email, password){
    console.log("email & Password: ", email, password);

    // firebase call for signup with password and email
    RegisterEmailPassword(email, password)

    .then((userCredential) => {

      // sign in
      const user = userCredential.user;
      console.log("Sign up a success we received:", user);

      CreateNewUser(user.uid, user).then(() => {
        navigation(RoutesObj.visiual.home.path, { replace: true});
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("an error has occured: ", errorCode, errorMessage);
    });
  }


  return (
    <div>
      <div className="NaviBar">
          <NaviBar/>
        </div>
      <div><h2 className="headings">Sign Up</h2>
      <h4 className="headings">You don't have an account yet? Don't worry, you can sign up below.</h4>
      </div>
      

      <div className="container">
          <AuthForm type='Sign Up' onAunthentication={(email, password) => submitSignUp(email, password)} />
      </div>

      <div className="App-footer">
        <Footer/>
      </div>
    </div>
  )
}
