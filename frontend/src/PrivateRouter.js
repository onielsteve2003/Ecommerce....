// import React from 'react'
// import { Navigate, useLocation } from 'react-router-dom'

// const PrivateRouter = ({component: Component, render, ...rest}) => {
//     let location = useLocation();
//   return (
//       <div
//         {...rest}
//         render = {(props) => {
//             const token = window.localStorage.getItem('userInfo')
//             if(token) {
//                 return <Component {...props} />
//             } else {
//                 return <Navigate to={'/login'} state={{ from: location }} replace />
//             }
//         }}
//     />
//   )
// }

// export default PrivateRouter

// import React from 'react'
// import { Navigate, useLocation } from 'react-router-dom';

// const PrivateRouter = () => {
//     const location = useLocation()
//     const auth = false; 

//     return auth ?  <Component {...props} /> : <Navigate to='/login' state={{ from: location }} replace />
// }

// export default PrivateRouter

import React from 'react';

import {Navigate, Outlet, useLocation} from 'react-router-dom'

// We created our custom hook which is useAuth
const useAuth=()=>{
  const user=localStorage.getItem('userInfo')
  if(user){
    return true
  } else {
    return false
  }
}

const PrivateRouter=(props) =>{
    const location = useLocation()
    const auth=useAuth()

  return auth?<Outlet {...props} />: <Navigate to="/login" state={{ from: location }} replace />
}

export default PrivateRouter;
