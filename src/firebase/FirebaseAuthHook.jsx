import { FIREBASE_AUTH, FIREBASE_FIRESTORE } from "./FirebaseConfig"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, signInAnonymously, onAuthStateChanged } from "firebase/auth"
import { doc, collection, query, where, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

const PathString = "USERS";
const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext); //Provider

export default function FiresbaseAuthHookProvider ({ children, ...props }){
    const [CurrentUser, setCurrentUSer] = useState(null);

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, async function(user) {
          let UserToUSe = {}
          const Ref = collection(FIREBASE_FIRESTORE, PathString);

          if (user!= null) {
              const q = query(Ref, where('uid', "==", `${user.uid}`));
              const querySnapshot = await getDocs(q);

            if(querySnapshot.docs[0]){
              const data = querySnapshot.docs[0].data();

              UserToUSe = {
                  cell: data.cell,
                  displayName: data.displayName,
                  email: data.email,
                  profileUrl: data.profileUrl,
                  uid: data.uid,
                  role: data.role,
                  cart: data.cart
              };
            
            }
        }
        setCurrentUSer(user ? UserToUSe: null)
       
      })
}, []);

useEffect(() => {
    console.log (CurrentUser);
}, [CurrentUser])


// sign up using email and password(Signup page)
function RegisterEmailPassword(email, password) {

    // firebase call to handle the aunth of a new user signing up.
    // returns a Promise of a type FirebaseUser
    return createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
}

// sign in using email and password(Signup page)
function LoginEmailPassword(email, password) {

    // firebase call to handle the aunth of a new user signing up.
    // returns a Promise of a type FirebaseUser
    return signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
}

// log out
function Logout() {
    signOut(FIREBASE_AUTH);
    window.location.replace("/");
}

// sign in with Google 
function SignInWithGoogle() {
    
    // comminication with firebase for the Google sign up
    const provider = new GoogleAuthProvider();
    // sign in via pop up using a Google account
    return signInWithPopup(FIREBASE_AUTH, provider);
}

// sign in Anonymously
function SignInAnon() {
    return signInAnonymously(FIREBASE_AUTH);
}

// create a new user from a Sign Up
// async ---> allows othe functions to co run while it is running
async function CreateNewUser(uid, user){

// check whether the user does exist
const isUser = user !== undefined && user !== null ? true : false;

// check if the user has a display name ( only Google auth does)
const dn = isUser && user.displayName !== null ? user.displayName : "";

// The new user object we want to create 
const payload = {
    displayName: dn.length > 0 ? dn : `${user.displayName}`,
    email: isUser ? user.email : "",
    profileUrl: isUser && user.profileUrl ? user.profileUrl : "", //Google
    uid: uid,
    role: "user",
    cart: []
};

// doc --> reference to a single document
const Ref = collection(FIREBASE_FIRESTORE, PathString)
const docRef = doc(FIREBASE_FIRESTORE, PathString, uid);

// same structure as an SQl query
const q = query(Ref, where("uid", "==", `${uid}`));

const querySnapshot = await getDocs(q);
console.log("q", q, "qs", querySnapshot);

// check that user does not exist in our db - avoid duplicates
if (querySnapshot.docs.length == 0){

    // create a db entry
    await setDoc(docRef, payload)
    .then((res) => {
        console.log("Create a New db entry", res);
    })
    .catch((err) => {
        console.log("ERROR cannot Create New User entry in db ", err)
    })

    };

}

// get the product from a single page along with the current user logged on attempting to add product to their cart
// need to make sure the function is only executted when a user is logged in

async function AddProductToCart(uid, order){
const docRef = doc(FIREBASE_FIRESTORE, `${PathString}/${uid}`);

await updateDoc(docRef, { cart: order})
    .then((res) => {
        console.log("Added product to user cart", res);
    })
    .catch((err) => {
        console.log("ERROR Cannot Add to user cart", err)
    });
}

// Dekete a single product from the cart --- >> Use index or an ID
// ** Extra ---> Map = return (explicit return must always return a value)
// **       ---> forEach = no return but rather iterate and do something for each entry in ana array
// use filter -> Find an element according to a given condition ---> specific
async function RemoveProductFromCart(uid, prodID){
console.log("???", uid, prodID);
const docRef = doc(FIREBASE_FIRESTORE, `${PathString}/${uid}`);
const tempArr = CurrentUser !== null ? CurrentUser.cart : [];

//Remove object from array
// let arr = tempArr.filter((e) => e.id != prodID);
tempArr.splice(prodID, 1)

// save new array in cloud firestore
await updateDoc(docRef, { cart: tempArr })

console.log("ARR", tempArr);

// save new array in cloud Firestore
await updateDoc(docRef, { cart: tempArr})
    // .then(() => {
    //     console.log("Files array updated successfully");
    //     window.location.reload();
    // })
    // .catch((err) => {
    //     console.log("Files array updated unscuccessful", err);
    // });
}


//Access values we want to be able to use
const value = {
    CurrentUser,
    RegisterEmailPassword,
    LoginEmailPassword,
    Logout,
    //forgotPassword
    //resetPassword
    SignInWithGoogle,
    SignInAnon,
    CreateNewUser,
    AddProductToCart,
    RemoveProductFromCart
};

return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}