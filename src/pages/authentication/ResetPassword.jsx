import React, {useState} from 'react'
import NaviBar from '../../components/navigation/NaviBar'
import Footer from '../../components/header_footer/Footer'
import Validation from './Validation'
import AuthForm from '../../components/reusable/AuthForm'


// email & password
// confirm email & button

export default function ResetPassword() {
 
  //     //Sign Up ---> Getting required fields
  //     const [values, setValues] = useState({
  //       email: "",
  //       password: "",
  //     });
      
  //     //Error validation
  //      const [errors, setErrors] = useState({});

  //     //Setting/storing the required fields
  //     const handleChange = (event) => {
  //     setValues({
  //     ...values,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  //  //Validation
  //  const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   setErrors(Validation(values))
  // }

  function submitReset(email, password){
    console.log("email & Password", email, password)
  }
 
  return (

    <div>
      <div className="NaviBar">
        <NaviBar/>
      </div>
      <div><h2 className="headings">Reset Password</h2>
      <h4 className="headings">Provide us with your new login details to reset your password</h4></div>

      <div className="container">
      <AuthForm type='Reset' onAunthentication={(email, password) => submitReset(email, password)} />
      </div>

      <div className="App-footer">
        <Footer/>
      </div>
    </div>
  )
}
