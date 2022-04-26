import Home from '../pages/basic/Home'
import SignIn from '../pages/authentication/SignIn'
import SignUp from '../pages/authentication/SignUp'
import ResetPassword from '../pages/authentication/ResetPassword'
import ForgotPassword from '../pages/authentication/ForgotPassword'
import Categories from '../pages/basic/Categories'
import SubCategories from '../pages/basic/SubCategories'
import Tshirt from '../pages/basic/Tshirt'
import AddProduct from '../pages/admin/AddProduct'
import Products from '../pages/basic/Products'
import Dashboard from '../pages/basic/Dashboard'
import Contact from '../pages/basic/Contact'
import About from '../pages/basic/About'

//RoutesObj.home.path
export const RoutesObj = {

    //Key Value

    visiual: {
    // --- Basic ---
   home: {name: "Home", path: "/", comp: <Home/>, ex: true},
   contact: {name: "Contact", path: "/contact", comp: <Contact/>, ex: true},
   about: {name: "About", path: "/about", comp: <About/>, ex: true},

   // --- Admin
   add: {name: "Add", path: "/add", comp: <AddProduct/>, ex: true},

   // --- Authentication --
   signin: {name: "Sign In", path: "/signin", comp: <SignIn/>, ex: true},
   signup: {name: "Sign Up", path: "/signup", comp: <SignUp/>, ex: true},
   forgotpassword: {name: "Forgot Password", path: "/forgot", comp: <ForgotPassword/>, ex: true},
   resetpassword: {name: "Reset Password", path: "/reset", comp: <ResetPassword/>, ex: true},
   dashboard: {name: "Dashboard", path: "/dashboard", comp: <Dashboard/>, ex: true}
    }, 

    nonVisiual: {

   // --- Kits Pages ---
   categories: {name: "Categories", path: "/categories", comp: <Categories/>, ex: true},
   subcategories: {name: "Sub Categories", path: "/cats/:cat", comp: <SubCategories/>, ex: false}, 
   prodcategories: {name: "Sub Categories", path: "/cat/:cat/subcat/:subcat", comp: <Products/>, ex: false},
   tshirt: {name: "Kit", path: "/c/:cat/s/:subcat/:index", comp: <Tshirt/>, ex: false}, //Product display

    }
};

//Convert an object to an Array uising a built in  js function
export const ViAllRoutes =Object.values(RoutesObj.visiual)
export const NonViAllRoutes =Object.values(RoutesObj.nonVisiual)

export const AllRoutes = [...ViAllRoutes,...NonViAllRoutes]