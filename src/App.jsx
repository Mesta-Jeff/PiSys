/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from "react";
import { useNavigate, Navigate, Route, Routes, useLocation } from "react-router-dom";

// TODO: Importing the Session Manager
import { isAuthenticated, handleVisibilityChange } from './utils/SessionManager';

// TODO: Importing all the layouts files for the routes
import AuthenticationLayout from "./layouts/Authentication";
import AppLayout from './layouts/App';
import ErrorPage from './pages/ErrorPage';

// TODO:  Importing Route Pages 
import LoginPage from './pages/auth/Login';
import DashboardPage from './pages/backend/Dashboard';
import ProductPage from './pages/backend/ProductPage'



const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
};

 

const App = () => {

  const location = useLocation();
  const navigate = useNavigate();
  

  const isAuthRoutes = ["/auth/login", "/auth/reset", "/", "*"] ;

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (isAuthRoutes.includes(location.pathname)) {
      html.removeAttribute("data-layout-mode");
      body.classList.add("authentication-bg", "position-relative");
    } else {
      html.setAttribute("data-layout-mode", "detached");
      html.setAttribute("data-bs-theme", "light");
      html.setAttribute("data-menu-color", "dark");
      html.setAttribute("data-topbar-color", "light");
      body.classList.remove("authentication-bg", "position-relative");
    }
  }, [location.pathname]);


  // TODO: This is the function that handles the visibility change of the page
  useEffect(() => {
    const onVisibilityChange = () => handleVisibilityChange(navigate);

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);


  return (
    <Routes>


      {/* Since all routes in the auth are universal use, the routes does not need different layout at this time */}
      <Route element={<AuthenticationLayout />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="auth/login" element={<LoginPage />} />

        {/* Fallback Route when error found  */}
        <Route path="*" element={<ErrorPage />} />

      </Route>


      {/* This is the central layout for all the backend dashboard all roles included */}
      <Route element={<ProtectedRoute> <AppLayout /> </ProtectedRoute>} >

        {/* Admin grouped rouotes only */}
        <Route path="admin">
          <Route path="products" element={<ProductPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>

        {/* Product Manager or any other roles routes would have been here if existed */}


      </Route>

    </Routes>

  );
};

export default App;
