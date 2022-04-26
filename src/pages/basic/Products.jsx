import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useData } from '../../firebase/FirebaseDataHook';
import ProductCatDisplay from '../../components/reusable/ProductCatDisplay';
import { RoutesObj } from '../../routes/AllRoutes';
import Footer from '../../components/header_footer/Footer';
import NaviBar from '../../components/navigation/NaviBar';

export default function Products() {
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

      let pathUrl = window.location.pathname //http://localhost:3000/cat/Male/subcat/Away%20T-Shirt
      let pathUrlSplit = pathUrl.split("/")  // "/cat/:cat/subcat/:subcat"
      
      let cat = pathUrlSplit[pathUrlSplit.length-3] 
      let subcat = pathUrlSplit[pathUrlSplit.length-1].replace("%20", " ")
      let main = Object.values(Products[cat][subcat].products);

      // console.log("??", main);
      setAllProducts(main);
      }
    }
  return (
    <div>
      <div className="NaviBar">
        <NaviBar/>
      </div>

      <div><h2 className="headings">Products</h2>
      <h4 className="headings">Purchase your favourite T-Shirt below!</h4></div>

        <div className="container"> 
          <div className="photoGrid"> 
               <ProductCatDisplay stringArray={allProducts} path ={RoutesObj.nonVisiual.tshirt.path} type="product" />
          </div>
        </div>

        <div className="Footer">
          <Footer/>
        </div>
    </div>
  )
}
