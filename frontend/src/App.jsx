// import './App.css'
// import Header from "./components/Registration/Header.jsx";
// import Footer from "./components/Registration/Footer.jsx";
// import Registration from "./pages/Registration/Registration.jsx";
// import RegistrationMessage from "./pages/Registration/RegistrationMessage.jsx";
// import RegistrationVerification from "./pages/Registration/RegistrationVerification.jsx";
// import Login from "./pages/Login/Login.jsx";
// import ForgotPassword from "./pages/Login/ForgotPassword.jsx";
// import NewPassword from "./pages/Login/NewPassword.jsx";
//
//
// function App() {
//    return (
//     <>
//     <NewPassword/>
//     </>
//   )
// }
//
// export default App

import PageRoutes from './routes';
import {useDispatch} from "react-redux";
import useAutoFetch from "./hooks/useAutoFetch.js";
import {useEffect} from "react";
import {loginUser, logoutUser} from "./store/slices/loggedInUser.js";
import error from "eslint-plugin-react/lib/util/error.js";

const App = () => {
  const dispatch = useDispatch()
  const stringUserData=localStorage.getItem('user')
  let userData = null;
  try{
    userData = JSON.parse(stringUserData)
  } catch (error) {
      console.warn(error);
  }

  const accessToken = localStorage.getItem('auth-token')

  const {error, loading} = useAutoFetch('post', 'auth/token/verify/', {token: accessToken})

  useEffect(() => {
         if(error === null){
             dispatch(loginUser({user: userData, accessToken: accessToken}))
         } else {
             dispatch(logoutUser())
             localStorage.clear()
         }
     }, [error, accessToken, dispatch, userData])

  return <PageRoutes />;
}

export default App;
