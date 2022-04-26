import React, { useState} from 'react'
import Validation from '../../pages/authentication/Validation';

export default function AuthForm({type, onAunthentication}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  
    // Sign Up ---> Getting required fields
    // const [values, setValues] = useState({
    //   email: "",
    //   password: "",
    //   confirmPass: "",
    // });
  
    // //Error validation
    // const [errors, setErrors] = useState({});
  
    // //Setting/storing the required fields ----> button to add
    // const handleChange = (e) => {
    //   setValues({
    //     ...values,
    //     [e.target.name]: e.target.value,
    //   });
    // };
  
  
    // Validation
    // const onSubmit = (e) => {
    //   e.preventDefault();
    //   setErrors(Validation(values))
    // }

  return (
    <div className="container">
      <div className="login_form">
       <div className="form-container">

        <label>Your Email Address</label>
        <input type="email" id="email" name="email" placeholder="e.g 1234@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        {/* {errors.email && <p className="error">{errors.email}</p>} */}

        <label>Password</label>
        <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        {/* {errors.password && <p className="error">{errors.password}</p>} */}

        <label>Confirm Password</label>
        <input type="password" id="confitmPass" name="confirmPass" placeholder="Confirm Password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}></input>
        {/* {errors.confirmPass && <p className="error">{errors.confirmPass}</p>} */}

        <button className="login-button" onClick={() => {onAunthentication(email, password)}}>{type}</button>
        
        </div>
    </div>
    </div>
  )
}
