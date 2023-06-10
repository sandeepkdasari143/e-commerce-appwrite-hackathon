import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_THEME } from './redux-store/theme.slice';
import { Routes, Route} from "react-router-dom";
import HomeLayout from './HomeLayout';
import Home from './pages/Home';

import LogIn from './pages/Authentication/LogIn';
import SignUp from './pages/Authentication/SignUp';

import DashboardHome from './Admin-Dashboard/pages/DashboardHome';
import Orders from './Admin-Dashboard/pages/Orders';
import Transactions from './Admin-Dashboard/pages/Transactions';
import Stock from './Admin-Dashboard/pages/Stock';
import AdminPanel from './Admin-Dashboard/pages/AdminPanel';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import AuthProtectedRoute from './lib/ProtectedRoutes/AuthProtectedRoute';
import SellerProtectedRoute from './lib/ProtectedRoutes/SellerProtectedRoute';
// import AppWriteAuth from '../appwrite-services/auth.service';

const App = () => {

  const mode = useSelector(state => state.theme.mode);
  const Theme = useSelector(state => state.theme.theme);

  // const auth = new AppWriteAuth();

  const [theme, setTheme] = useState(null);
  const dispatch = useDispatch();

  //Setting the MUI theme Object
  React.useEffect(() => {
    const theme = createTheme(Theme)
    setTheme(theme);
  },[Theme])

  // If the "theme" value of the context changes, then this useEffect will be called...
  React.useEffect(()=>{
    if(mode === "dark"){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  },[mode])

  // For Browser Default Theme Mode...
  React.useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      dispatch(SET_THEME('dark'))
    }else{
      dispatch(SET_THEME('light'))
    }
  }, [dispatch])

  return (
    <>
      {theme && <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path="/" element={<AuthProtectedRoute><HomeLayout /></AuthProtectedRoute>}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/seller/dashboard" element={<SellerProtectedRoute><DashboardHome /></SellerProtectedRoute>} />
            <Route path="/seller/stock" element={<SellerProtectedRoute><Stock /></SellerProtectedRoute>} />
            <Route path="/seller/orders" element={<SellerProtectedRoute><Orders /></SellerProtectedRoute>} />
            <Route path="/seller/transactions" element={<SellerProtectedRoute><Transactions /></SellerProtectedRoute>} />
            <Route path="/seller/panel" element={<SellerProtectedRoute><AdminPanel /></SellerProtectedRoute>} />
          </Routes>
        </ThemeProvider>
      }
    </>
  );
}

export default App