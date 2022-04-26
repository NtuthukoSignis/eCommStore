import React from 'react'
import Footer from '../../components/header_footer/Footer'
import NaviBar from '../../components/navigation/NaviBar'

export default function Contact() {
  return (
    <div>
        <div className="NaviBar">
            <NaviBar/>
        </div>
        
        <div><h2 className="headings">Contact US</h2>
        <h4 className="headings">Stay in touch with us, Leave a message or a comment below! We appreciate your feeback</h4></div>
    
        <div className="container">
            <div className="login_form">
                <div className="form-container">

                    <label>Your Email Address</label>
                    <input type="email" id="email" name="email" placeholder="e.g 1234@gmail.com"></input>
                
                    <label>Name & Surname</label>
                    <input type="text" id="name" name="name" placeholder="John Mark"></input>

                    <label>Message/Comment</label>
                    <textarea id="comment" name="comment" placeholder="Leave your message or comment here" style={{height:"170px"}}></textarea>
                    
                    <button className="login-button">Submit</button>
                    
                </div>
            </div>
    </div>

    <footer className="Footer">
       <Footer/>
    </footer>
</div>
)
}
