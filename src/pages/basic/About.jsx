import React from 'react'
import Footer from '../../components/header_footer/Footer'
import NaviBar from '../../components/navigation/NaviBar'
import Image2 from '../../assets/images/back4.jpg'
import Image1 from '../../assets/images/back5.jpg'
import Image3 from '../../assets/images/Away.jpeg'


export default function About() {
  return (
    <div>
    <div className="NaviBar">
        <NaviBar/>
    </div>

    <div><h1 className="headings">About Us</h1>
    <h4 className="headings">You want to know more about Mzansi Sport store? All details is provided beliow!</h4></div>

    <div className="container">
    <div className="photoGrid">
        <figure className="figure" >
            <img className="about-image" src={Image2}/>
            <figcaption> 
                Welcome to the Amazing soccer T-shirt store in South Africa. Where you can purchase your favourite soccer teams T-shirt
                at an afforbale price. We have a wide range of different T-Shirt including the European World Championps Real Madrid and many
                more. We also have T-Shirst for:
                    <li>Chelsea Football Club</li>
                    <li>Manchester United Football Club</li>
                    <li>Juventus Football Club</li>
                    <li>Kaizer Chiefs Football Club</li>
                    <li>Mamelodi Sundowns Football Club</li>
                    <li>Arsenal Football Club</li>
                    <li>Barcelona Football Club</li>
                    <li>And many more....</li>           
            </figcaption>    
        </figure>

        <figure className="figure" >
            <img className="about-image" src={Image3}/>
                <figcaption> 
                We believe eveyone deserves a little bit of fun during the weekend when everyone is watching their favoutite soccer team plays,
                So why not provide everyone with their teams awesome T-Shirt. Check our categories below and purchase yours.<br/><br/>
                        <li>Mens T-Shirt</li>
                        <li>Women T-Shirt</li>
                        <li>Kids T-Shirt</li>
                </figcaption>    
            </figure>  

            <figure className="figure" >
            <img className="about-image" src={Image1}/>
                <figcaption> 
                Located in East London, Amalinda Road, South Africa.
                Football Store - Is a an online store that provide variety of T-Shirts to soccer fans across South Africa at an afforable price.
                The website was Design by @ Ntuthuko Ndlovu who is currently an Intern @ DSK Technologies.
                The Website was designed using JavaScript, React and Firebase.
                </figcaption>    
            </figure>  
    </div>
    </div>

    <div className="Footer">
        <Footer/>
    </div>
    </div>
  )
}
