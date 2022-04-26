import React, { useEffect, useState } from 'react'
import NaviBar from '../../components/navigation/NaviBar'
import Footer from '../../components/header_footer/Footer'
import image1 from '../../assets/images/Liverpool.jpg'
import image2 from '../../assets/images/Madrid.jpg'
import image3 from '../../assets/images/Manchester.jpg'
import image4 from '../../assets/images/Kaizer.jpg'
import { useNavigate } from "react-router-dom";
import { useData } from '../../firebase/FirebaseDataHook'
import ProductCatDisplay from '../../components/reusable/ProductCatDisplay'
import { RoutesObj } from '../../routes/AllRoutes'
import { useAuth } from '../../firebase/FirebaseAuthHook'

export default function Kit() {
  const [singleprod, setSingleProd] = useState(null);
  const [id, setid] = useState('')
  const { AddProductToCart, CurrentUser } = useAuth();
  const { Products } = useData()
  const [quantity, setQuantity] = useState(1);
  
  const navigate = useNavigate()

    useEffect(() => {
      SetUp()
      }, []);

      // with state, its triggered everytime there's update or changes
      useEffect(() => {
      SetUp()
    }, [Products, window.location.pathname])

    useEffect(() => {console.log("?????", CurrentUser);SetUp()}, [CurrentUser])

    function AddToCart(){
      
      // SIGN IN
      console.log("Addidng to the cart", CurrentUser);
      if (CurrentUser !== null && CurrentUser !== undefined){

        // OLD cart values from db connected to this user
        let old = CurrentUser.cart;
        console.log("OLD", old)

        let newOrder = {
          main: singleprod.mainCat,
          sub: singleprod.subCat,
          id: id,
          quantity: 1
        }

        // user has an existing and it does posibly contain other products
        if (old !== null && old !== undefined) {

          old.push(newOrder)
          // Firebasee function
          AddProductToCart(CurrentUser.uid, old)
              .then((res) => {
                console.log("YAY");
                window.alert("added to cart");
              })
              .catch((err) => {
                console.log("Error, ", err);
              });

        }

        // User has an empty cart or cleared out or existing cart either no info is contained in the cart of the user
        else {
          // No cart yet so make one
          let cart = [];
          cart.push(newOrder);
          console.log("new added", cart);

          // Firebase update call
          AddProductToCart(CurrentUser.uid, cart)
              .then((res) => {
                console.log("YAY");
                window.alert("added to cart");
              })
              .catch((err) => {
                console.log("Error, ", err);
              });
        }

      }
      // NOT SIGNED IN
      else{
        // to let the user redirect self
        let con = window.confirm("Please log in to add to cart");
        if (con) {
          navigate(RoutesObj.visiual.signin.path);
        }
      }
    }

    function addQuantity(){
      // let quantity = 0;
      // quantity++;
      // setQuantity(quantity);
      // console.log("Quantity: ", quantity)

      setQuantity(quantity + 1)
    }

    function subQuantity(){
      // let quantity = 0;
      // if(quantity < 0){
      //   alert("Please add a product")
      // }
      // else{
      //   quantity--;
      //   setQuantity(quantity);
      //   console.log("Quantity: ", quantity)
      // }
      setQuantity(Math.max(quantity - 1, 0))
    }


    function SetUp() {
      if (Products) {

      let pathUrl = window.location.pathname //http://localhost:3000/c/Away%20T-Shirt/s/subcat/1
      let pathUrlSplit = pathUrl.split("/")//                        c/:cat/s/:subcat/:index
      
      let cat = pathUrlSplit[pathUrlSplit.length-4].replace("%20", " ")  // Only the category and sub category is needed for space checking
      let subcat = pathUrlSplit[pathUrlSplit.length-2].replace("%20", " ")
      let id = pathUrlSplit[pathUrlSplit.length-1]

      setid(id)

      // --- Foolowing the database structure from the main Cat --> sub cat --> "products" --> than get the ID
        if(Products){

          if(Products[cat]){

            if(Products[cat][subcat]){

              if(Products[cat][subcat].products){

                let main = Object.values(Products[cat][subcat].products);

                // ------->>>> Setting the product details
                    let prod = main[id];
                    if (prod != null){
                      setSingleProd(prod);
                    }

                // ------->>>>
                
              }
            }
          }
        }


      }
    }

  return (
    <div>
    
      <div className="NaviBar">
        <NaviBar/>
      </div>

{singleprod !==null && <>  
{/* So when the product is null it wont display anything unless theres a product --> State is async */}
  <div><h2 className="headings">{singleprod.name}&nbsp;{singleprod.subCat}&nbsp;{singleprod.description}</h2>
      </div>
 

      <div className="container"> 
            <div className="photoGrid"> 
              {/* <ProductCatDisplay stringArray={allProducts} path ={RoutesObj.nonVisiual.tshirt.path} type="tshirt"/> */}

              
              <figure className="figure">
                <h2 className="category-heading">{singleprod.cat}&nbsp;{singleprod.name}&nbsp;{singleprod.subCat}</h2>
                    <img className="photo" src={singleprod.image}/>
                    <figcaption>
                        <p> <em> {singleprod.name}&nbsp;{singleprod.subCat}&nbsp;{singleprod.description} </em></p>
                        <p className="price">{singleprod.price}</p>
                        
                        

                        <div className="button-container">
                            <button onClick={subQuantity}> <ion-icon name="remove-circle-outline"></ion-icon></button>
                            <button className="add-button" onClick={()=> AddToCart()}> ADD TO CART </button> 
                            <button onClick={addQuantity}> <ion-icon name="add-circle-outline"></ion-icon></button>
                        </div>
                        <l>Quantity: </l><label>{quantity}</label>
                      

                    </figcaption> 
                </figure>   
            </div>

        </div>
          </>}

        <div className="Footer">
          <Footer/>
      </div>
    </div>
  )
}
