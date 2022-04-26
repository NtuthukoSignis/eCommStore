import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { RoutesObj } from '../../routes/AllRoutes'
import image1 from '../../assets/images/Male.jpg'
import image2 from '../../assets/images/Kids.jpg'
import image3 from '../../assets/images/Female.jpg'
import { useData } from '../../firebase/FirebaseDataHook';


export default function ProductCatDisplay({stringArray, path, type}) {
    const {Products} = useData()
    const [ARRAY_DISPAY, setARRAY_DISPAY] = useState([])
    const navigate = useNavigate();

    useEffect(() => {createDisplay()}, [])
    useEffect(() => {createDisplay()}, [stringArray])

    function createDisplay(){
        if(type === "main"){
            let arr = []
            // from main category to sub category content 
            stringArray.forEach((cat, index)=> {
                let pathCleaned = path.replace(":cat", cat) //using hardcore value  "/cats/:cat"
                console.log("PATHS: ", cat, path, pathCleaned);
                 
                if (cat !== "img"){
                    arr.push(             
                        <figure className="figure">
                            <h2 className="category-heading">{cat}</h2>
                            <img className="photo" src={Products[cat].img}/>
                                <figcaption>
                                <p><em> We got the best {cat} soccer/football t-shirt/jersey in the house. Purchase yours... Now!! </em></p>
                                    <div className="button-container">
                                        <button className="add-button" key={index}  onClick={() => navigate(`${pathCleaned}`)}> SELECT </button>  
                                    </div>
                                </figcaption>
                            </figure>               
                         )
                }
                
                })
    
            setARRAY_DISPAY(arr)
        }

        if(type === "sub"){
            let arr = []
            // get the cat from url
            let pathUrl = window.location.pathname //http://localhost:3000/cats/Male
            let pathUrlSplit = pathUrl.split("/")
            let cat = pathUrlSplit[pathUrlSplit.length-1]
            // from sub category to products content 
            stringArray.forEach((subcat, index)=> {
                let pathCleaned = path.replace(":cat", cat).replace(":subcat", subcat) //using hardcore value  "/cat/:cat/subcat/:subcat"
                console.log("PATHS: ", subcat, path, pathCleaned);
    
                if(subcat !== "img"){
                    arr.push(   
                        <figure className="figure">
                            <h2 className="category-heading">{subcat}</h2>
                            <img className="photo" src={Products[cat][subcat].img}/>
                            <figcaption>
                                <p><em> Purchase the {subcat} of your favourite soccer/football team below... Now!! </em></p>
                                <div className="button-container">
                                    <button className="add-button" key={index} onClick={() => navigate(`${pathCleaned}`)}> SELECT </button> 
                                </div>
                            </figcaption>
                        </figure>                
                    )
                }
            })
    
            setARRAY_DISPAY(arr)
        }

        if(type === "product"){
            let arr = []
            console.log(stringArray)
            // get the cat from url
            let pathUrl = window.location.pathname //http://localhost:3000/cat/Male/subcat/Away%20T-Shirt
            let pathUrlSplit = pathUrl.split("/")
            let cat = pathUrlSplit[pathUrlSplit.length-3]
            let subcat = pathUrlSplit[pathUrlSplit.length-1].replace("%20", " ")

            // from product to Tshirt content 
            stringArray.forEach((prod, index)=> {
                let pathCleaned = path.replace(":cat", cat).replace(":subcat", subcat).replace(":index", index) //using hardcore value  "/c/:cat/s/:subcat/:index"
                console.log("PATHS: ", prod, path, pathCleaned);
           
                if (prod !== "img"){
                    arr.push(                 
                        <figure className="figure">
                        <h2 className="category-heading">{prod.name}&nbsp;{prod.subCat}</h2>
                            <img className="photo" src={prod.image}/>
                            <figcaption>
                                <p> <em> {prod.name}&nbsp;{prod.subCat}&nbsp;{prod.description} </em></p>
                                <p className="price">{prod.price}</p>
                                <div className="button-container">
                                    <button className="add-button" key={index} onClick={() => navigate(`${pathCleaned}`)}> PURCHASE NOW </button> 
                                </div>
                            </figcaption> 
                        </figure>   
                    )  
                }                      
            })
    
            setARRAY_DISPAY(arr)
        }

    }


    return <>
    {ARRAY_DISPAY.map((ele, index)=> {return ele})}
    </>


}
