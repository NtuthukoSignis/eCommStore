import React, { useEffect, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logout } from '../../firebase/FirebaseAuthHook'
import { AllRoutes, RoutesObj, ViAllRoutes } from '../../routes/AllRoutes'
import { useAuth } from "../../firebase/FirebaseAuthHook"

export default function NaviBar() {
   const [currUserLocal, setcurrUserLocal] = useState(null);

    const { Logout, CurrentUser } = useAuth();

    useEffect(() => {
      if(CurrentUser !== null && CurrentUser !== null){
        setcurrUserLocal({displayName: CurrentUser?.displayName, email: CurrentUser?.email, profileUrl: CurrentUser?.profileUrl, 
          uid: CurrentUser?.uid, role: CurrentUser?.role});
      }else{
          setcurrUserLocal(null)
        }
      }, [CurrentUser]);


      function NavOnAuth(){
        return ViAllRoutes.reverse().map((entry, index) => {
          if (currUserLocal && currUserLocal.uid && CurrentUser.uid.length > 0) {
            return (
              <React.Fragment key={index}>
                {entry.name === RoutesObj.visiual.signin.name || entry.name === RoutesObj.visiual.signin.name || 
                entry.name === RoutesObj.visiual.forgotpassword.name ? (
                  <React.Fragment key={index}></React.Fragment>
                ) : (
                  <NavLink className='navlink' key={index} to={entry.path}>
                    {entry.name}
                  </NavLink>
                )             
              }
              </React.Fragment>
            );
          } else {
            return (
              <NavLink className='navlink' key={index} to={entry.path}>
                {entry.name}
              </NavLink>
            )
          }

        })
      }

      return<>
      {NavOnAuth()}

{currUserLocal?.uid?.length > 0 && (
  <button className="logout-button" onClick={() => {
    Logout();
  }}>
    Sign Out
  </button>
)}
      </>

}
