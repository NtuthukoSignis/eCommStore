import React, { createContext, useContext, useEffect, useState} from 'react'
import { FIREBASE_REALTIME_DB } from './FirebaseConfig';
import { onValue, ref, set, push } from 'firebase/database';

const PathString = "PRODUCTS/";

const DataContext = createContext({});
export const useData = () => useContext(DataContext); //Provider


export default function FirebaseDataHookProvider({children, ...props}) {
    
    const [Products, setProducts] = useState(null); //  null if empty and {} []

    //READ from the database

    useEffect(() => {
        const Ref = ref(FIREBASE_REALTIME_DB, PathString);
        onValue(Ref, (snapshot) => {
            const data = snapshot.val();
            console.log("DATA", data)
            if (data !== null) {
                setProducts(data);
            }
        });
    }, []);

    useEffect(() => {}, [Products]);

    function CreateProduct(newProduct){

    // Get a key for a new product
    // let productInfo = {name: "Test", desc: "test", price: 0.0, stockLvel: 1, image: [""],
    // mainCat: "Female", subCart: "Dresses"}

    let path = `${PathString}${newProduct.mainCat}/${newProduct.subCat}/products`;
    let REF = ref(FIREBASE_REALTIME_DB, `${path}`);
    const Key = push(REF).key;
    let finalREF = ref(FIREBASE_REALTIME_DB, `${path}/${Key}`);

    return set(finalREF, newProduct)

    }

    function UpdateProduct(ProductID, newProduct, oldProduct){}

    function DeleteProduct(ProductID){}

    const value = {
        CreateProduct, //CREATE
        Products, // VIEW/Read
        UpdateProduct, //UPDATE
        DeleteProduct // DELETE
    };
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
