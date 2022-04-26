import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import NaviBar from '../../components/navigation/NaviBar'
import Footer from '../../components/header_footer/Footer'
import { RoutesObj } from '../../routes/AllRoutes';
import image1 from '../../assets/images/Female.jpg'
import image2 from '../../assets/images/Male.jpg'
import image3 from '../../assets/images/Kids.jpg'
import ProductCatDisplay from '../../components/reusable/ProductCatDisplay';
import { useData } from '../../firebase/FirebaseDataHook';


export default function Categories() {
    const navigate = useNavigate()

    // Empty array is triggered when page is loading
    const { Products } = useData();
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
      let main = Object.keys(Products);
      // console.log("??", main);
      setAllProducts(main);
      }
    }


  return (

    <div>
        <div>
          <div className="NaviBar">
              <NaviBar/>
          </div>

        <div><h1 className="headings">Categories</h1></div>

            <div className="container"> 
              <div className="photoGrid">                        
                  <ProductCatDisplay  stringArray={allProducts} path ={RoutesObj.nonVisiual.subcategories.path} type="main" />
              </div>
            </div>

        <div className="Footer">
          <Footer/>
        </div>
        
        </div>
    </div>
  );
}
