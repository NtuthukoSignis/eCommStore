import React, { useEffect, useState } from 'react'
import NaviBar from '../../components/navigation/NaviBar'
import Footer from '../../components/header_footer/Footer'
import { RoutesObj } from '../../routes/AllRoutes';
import image1 from '../../assets/images/Liverpool.jpg'
import image2 from '../../assets/images/Madrid.jpg'
import image3 from '../../assets/images/Manchester.jpg'
import image4 from '../../assets/images/Kaizer.jpg'
import { useNavigate } from "react-router-dom";
import { useData } from '../../firebase/FirebaseDataHook';
import ProductCatDisplay from '../../components/reusable/ProductCatDisplay';

export default function Kits() {
    const navi = useNavigate()
    const { Products } = useData()

    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
      SetUp()
      }, []);

      // with state, its triggered everytime there's update or changes
      useEffect(() => {
      SetUp()
    }, [Products])

    function SetUp() {
      if (Products) {

      let pathUrl = window.location.pathname //http://localhost:3000/cats/Male
      let pathUrlSplit = pathUrl.split("/")
      let cat = pathUrlSplit[pathUrlSplit.length-1]

      let main = Object.keys(Products[cat]);
      // console.log("??", main);
      setAllProducts(main);
      }
    }


  return (
    
    <div>
        <div className="NaviBar">
          <NaviBar/>
        </div>

        <div><h2 className="headings">Sub Category</h2></div>

          <div className="container"> 
            <div className="photoGrid"> 
              <ProductCatDisplay stringArray={allProducts} path ={RoutesObj.nonVisiual.prodcategories.path} type="sub" />
            </div>
          </div>               

        <div className="Footer">
          <Footer/>
        </div>
    </div>
  
  )
}
