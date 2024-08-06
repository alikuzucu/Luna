import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import Restaurants from '../pages/Restaurants/Restaurants.jsx';
import Users from '../pages/Users/Users.jsx';
// import ProtectedRoutes from './ProtectedRoutes';
import Reviews from "../pages/Reviews/Reviews.jsx";
import Login from '../pages/Login/Login.jsx';
import ForgotPassword from '../pages/Login/ForgotPassword.jsx';
import NewPassword from '../pages/Login/NewPassword.jsx';
import Registration from '../pages/Registration/Registration.jsx';
import RegistrationMessage from '../pages/Registration/RegistrationMessage.jsx';
import RegistrationVerification from '../pages/Registration/RegistrationVerification.jsx';
import NotFound from '../pages/NotFound/Notfound.jsx'
import UserProfile from "../components/UserProfile/UserProfile.jsx";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Restaurants />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/registration-message" element={<RegistrationMessage />} />
        <Route path="/registration-verification" element={<RegistrationVerification />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRoutes;
