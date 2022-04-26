import React, { useState } from 'react'
import { useData } from '../../firebase/FirebaseDataHook';
import NaviBar from '../../components/navigation/NaviBar'
import Footer from '../../components/header_footer/Footer'

export default function AddProduct() {

    //------->>>>>>>>>>>>
    const [mainCat, setMainCat] = useState("");
    const [subCat, setSubCat] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [image, setImage] = useState("");


    const { CreateProduct } = useData();


        const MainCat = ["Male", "Female", "Kids"]; // select.option
        const SubCat = [  "Home T-Shirt", "Away T-Shirt", "3rd T-Shirt"]; // select.option
    
        // let productInfo = {name: "Test", desc: "test", price: 0.0, stockLvel: 1, image: [""],
        // mainCat: "Female", subCat: "T-Shirts"}

    // function onChange(){
        const addNewProduct = {
            mainCat: mainCat,
            subCat: subCat,
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            image: image,
        }

  return (
<div>
    <div className="NaviBar">
        <NaviBar/>
    </div>
    <div><h2 className="headings">Add Product</h2>
    <h4 className="headings">Add a new product (T-shirt) below!</h4></div>

    <div className="container">
        <div className="login_form">
            <div className="form-container">

            <label>Product Category</label>
            <select className="select">
                {MainCat.map((main, index) => (
                    <option key={index} value={main} onClick={(e) => setMainCat(e.target.value)}> {main}</option>
                ))}
            </select>

            <label>Product Sub Category</label>
            <select className="select">
            {SubCat.map((sub, index) => (
                <option key={index} value={sub} onClick={(e) => setSubCat(e.target.value)}> {sub}</option>
            ))}
                </select>
                
                <label>Team Name</label>
                <input type="text" id="name" name="name" placeholder="e.g Real Madrid"  value={name} onChange={(e) => setName(e.target.value)}></input>

                <label>Description</label>
                <input type="text" id="description" name="description" placeholder="e.g Long Sleeve 2021/2022" value={description} onChange={(e) => setDescription(e.target.value)}></input>

                <label>Price</label>
                <input type="text" id="price" name="price" placeholder="e.g R899.99" value={price} onChange={(e) => setPrice(e.target.value)}></input>

                <label>Quantity</label>
                <input type="text" id="quantity" name="quantity" placeholder="e.g 10" value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>

                <div className="upload-button-container">
                    <label> Upload Picture </label>
                    <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)}></input>
                </div>
            
            <button className="login-button" onClick={() => {
            CreateProduct(addNewProduct);
        }}>
        Add Product</button>
        </div>
        </div>

        <div className="App-footer">
            <Footer/>
        </div>
        
        </div>
    </div>
  )
}
