import { connectStorageEmulator } from '@firebase/storage';
import React, { useEffect, useState } from 'react'
import Footer from '../../components/header_footer/Footer';
import NaviBar from '../../components/navigation/NaviBar';
import { useAuth } from '../../firebase/FirebaseAuthHook'
import { useData } from '../../firebase/FirebaseDataHook';


export default function Dashboard() {
    const { RemoveProductFromCart, CurrentUser } = useAuth();
    const { Products } = useData();

    // hold info that we got from the user
    const [CART, setCART] = useState([]);

    useEffect(() => {
        console.log("curr: ", CurrentUser)
        if (CurrentUser !== null && CurrentUser.cart != undefined && CurrentUser.cart !== null && CurrentUser.cart.length > 0){
            setCART(CurrentUser.cart);
        }
        if (CurrentUser !== null && CurrentUser.cart != undefined && CurrentUser.cart !== null && CurrentUser.cart.length !== CART.length){
            console.log("Something changed. Lets check");
        }
    }, [CurrentUser]);

    useEffect(() => {
        console.log("prods: ", Products);
        let arr = [];
        if (CurrentUser !== null && (CurrentUser.cart !== null || CurrentUser.cart !== undefined)){

            if(Products !== null){

            console.log("Current user.cart", CurrentUser.cart);

            console.log("Ok we have the info, let's setup"); 

            // Object is referneced with an ID 
            CurrentUser.cart.map((entry, index) => {

                if (Products[entry.main]) {
                    if (Products[entry.main][entry.sub]) {
                        if (Products[entry.main][entry.sub].products){   // this statement will be prod.index everwhere

                            //* follow this when using index
                            let prods = Object.values(Products[entry.main][entry.sub].products)
                            // prods[entry.id];
                            console.log("PRODUCTS", entry, prods[entry.id])

                            if (prods[entry.id]){
                                console.log("???", prods[entry.id]);
                                arr.push({
                                    prod: prods[entry.id],
                                    cart: entry,
                                    index
                                });
                                
                            }

                        }
                    }
                }
            })
            setCART(arr);
            }

        }

    }, [Products]);

    useEffect(() => {
      
    }, [CART])


    function RemoveProduct(entry){
        console.log("?? REMOVE", entry.index);
        // FIREBASE function
        RemoveProductFromCart(CurrentUser.uid, entry.index) // when using an Index we make use of Splice method. With ID we use filter
        .then(() => {
            console.log("Files array updated successfully");
            // window.location.reload();
        })
        .catch((err) => {
            console.log("Files array updated unscuccessful", err);
        }); 
    }

    function DisplayCart(){
        if (CurrentUser && Products && CART && CART.length > 0){
            return (
                <table>
                    <tr>
                        <th></th> 
                        <th>Category</th>  
                        <th>Team name</th> 
                        <th>Type of T-Shirt</th>  
                        <th>Price</th> 
                        <th>Quantity</th> 
                        <th></th>             
                    </tr>
                    {CART.map((entry, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <img className="DashPhoto" src={entry?.prod?.image ? entry.prod.image : ""} alt='Loading...' />
                                </td>
                                <td>{entry?.prod?.mainCat}</td>
                                <td>{entry?.prod?.name}</td>
                                <td>{entry?.prod?.subCat}</td>
                                <td>{entry?.prod?.price}</td>
                                <td>{entry?.prod?.quantity}</td>
                                <td>
                                    <button className="removeButton" onClick={() => {
                                     RemoveProduct(entry)
                                    }}> Remove Product

                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            )
        }
    }


  return (
    
    <>
     <div className="NaviBar">
        <NaviBar/>
    </div>
    
    <div><h2 className="headings">Dashboard</h2>
    <h4 className="headings">All your products are below.. </h4></div>

    <div className="container"> 
        <div className="photoGrid">  
            {DisplayCart()}
        </div>
    </div>

    <div className="Footer">
        <Footer/>
    </div>
    </>
  )
}
