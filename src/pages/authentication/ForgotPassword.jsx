import React, { useState} from 'react'
import NaviBar from '../../components/navigation/NaviBar'
import Footer from '../../components/header_footer/Footer'
import Validation from './Validation'


// input --> Email
// Button

export default function ForgotPassword() {

  //Forgot Password ---> Getting required fields(email)
  const [values, setValues] = useState({
    email: "",
  });

  //Error validation
  const [errors, setErrors] = useState({});

   //Setting/storing the required fields
   const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

   //Validation
   const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values))
  }


  return (
    <div>
        <div className="NaviBar">
          <NaviBar/>
        </div>
    <div><h2 className="headings">Forgot Password</h2>
    <h4 className="headings">Forgot your password? Don't worry, you can recover your login details below!</h4></div>

    <div className="container">
      <div className="login_form">
          <form className="form-container">

          <label>Your Email Address</label>
          <input type="email" id="email" name="email" placeholder="e.g 1234@gmail.com" values={values.email} onChange={(event) => setValues(event.target.value)}></input>
          {errors.email && <p className="error">{errors.email}</p>}

          <input type="submit" value="Submit" onClick={handleFormSubmit}></input>
          </form>
      </div>

      <div className="App-footer">
        <Footer/>
      </div>
    </div>
    </div>
  )
}
