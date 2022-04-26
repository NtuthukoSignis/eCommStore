import React from 'react'
import { useNavigate } from "react-router-dom";
import NaviBar from '../../components/navigation/NaviBar'
import Footer from '../../components/header_footer/Footer'
import image1 from '../../assets/images/Liverpool.jpg'
import image2 from '../../assets/images/Madrid.jpg'
import image3 from '../../assets/images/Manchester.jpg'
import image4 from '../../assets/images/Kaizer.jpg'
import { RoutesObj } from '../../routes/AllRoutes';
import image5 from '../../assets/images/back.jpg'


export default function Home() {
 const navi = useNavigate()
  
  return (
    <div>
      <div className="NaviBar">
        <NaviBar/>
      </div>
 
 <div className="home">
    <div><h2 className="headings">Home</h2>
    <h3 className="headings">Welcome to Mzansi Sports homepage</h3>
    <h4 className="headings">Get all your favourites soccer team T-Shirts for any team across the world... Purschase yours Now!!!</h4></div>
    

    <div className="container">

      <div className="photoGrid">
        <figure className="figure">
        <h2 className="category-heading">Liverpool 21/22 Home T-shirts</h2>
          <img className="photo" src={image1}/>
          <figcaption>
          Liverpool 21/22 Home T-shirts

                <div className="button-container">
                <button className="add-button" onClick={()=> navi(RoutesObj.nonVisiual.categories.path)}>PURCHASE NOW</button>
                </div>

          </figcaption>
        </figure>

        <figure className="figure">
        <h2 className="category-heading">Real Madrid 21/22 Home T-shirts</h2>
          <img className="photo" src={image2}/>
          <figcaption>
          Real Madrid 21/22 Home T-shirts

              <div className="button-container">
                    <button className="add-button" onClick={()=> navi(RoutesObj.nonVisiual.categories.path)}>PURCHASE NOW</button>
              </div>
          </figcaption>
        </figure>

        <figure className="figure">
        <h2 className="category-heading">Manchester United 21/22 Home T-shirts</h2>
          <img className="photo" src={image3}/>
          <figcaption>
            Manchester United 21/22 Home 
            
            <div className="button-container">
                <button className="add-button" onClick={()=> navi(RoutesObj.nonVisiual.categories.path)}>PURCHASE NOW</button>
                </div>

          </figcaption>
        </figure>

        <figure className="figure">
        <h2 className="category-heading"> Kaizer Chiefs 21/22 Home T-shirts </h2>
          <img className="photo" src={image4}/>
          <figcaption>
            Kaizer Chiefs 21/22 Home 
            
            <div className="button-container">
                <button className="add-button" onClick={()=> navi(RoutesObj.nonVisiual.categories.path)}>PURCHASE NOW</button>
                </div>

          </figcaption>
        </figure>
      </div>
    </div>
    </div>
    <div className="Footer">
      <Footer/>
    </div>

  </div>
  )
}

