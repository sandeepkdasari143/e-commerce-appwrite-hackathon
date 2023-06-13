import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_THEME } from "./redux-store/theme.slice";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import Home from "./pages/Home";

import LogIn from "./pages/Authentication/LogIn";
import SignUp from "./pages/Authentication/SignUp";

import DashboardHome from "./Seller-Dashboard/pages/DashboardHome";
import Orders from "./Seller-Dashboard/pages/Orders";
import Transactions from "./Seller-Dashboard/pages/Transactions";
import Stock from "./Seller-Dashboard/pages/Stock";
import AdminPanel from "./Seller-Dashboard/pages/AdminPanel";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import AuthProtectedRoute from "./lib/ProtectedRoutes/AuthProtectedRoute";
import SellerProtectedRoute from "./lib/ProtectedRoutes/SellerProtectedRoute";
import UserProfile from "./pages/UserProfile/pages/UserProfile";
import UserOrders from "./pages/UserProfile/pages/UserOrders";
import UserTransactions from "./pages/UserProfile/pages/UserTransactions";
import UserAddresses from "./pages/UserProfile/pages/UserAddresses";
import OrdersFallbackUI from "./Seller-Dashboard/pages/Orders/pages/OrdersFallbackUI";
import OrdersMapView from "./Seller-Dashboard/pages/Orders/pages/OrdersMapView";
import OrdersGridView from "./Seller-Dashboard/pages/Orders/pages/OrdersGridView";

// import AppWriteAuth from '../appwrite-services/auth.service';

const App = () => {
  const mode = useSelector((state) => state.theme.mode);
  const Theme = useSelector((state) => state.theme.theme);

  // const auth = new AppWriteAuth();

  const [theme, setTheme] = useState(null);
  const dispatch = useDispatch();

  //Setting the MUI theme Object
  React.useEffect(() => {
    const theme = createTheme(Theme);
    setTheme(theme);
  }, [Theme]);

  // If the "theme" value of the context changes, then this useEffect will be called...
  React.useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  // For Browser Default Theme Mode...
  React.useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      dispatch(SET_THEME("dark"));
    } else {
      dispatch(SET_THEME("light"));
    }
  }, [dispatch]);

  return (
    <>
      {theme && (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/"
              element={
                <AuthProtectedRoute>
                  <HomeLayout />
                </AuthProtectedRoute>
              }
            >
              <Route index element={<Home />} />
              <Route
                path={`/user/:userID/profile`}
                element={
                  <AuthProtectedRoute>
                    <UserProfile />
                  </AuthProtectedRoute>
                }
              />
              <Route
                path={`/user/:userID/orders`}
                element={
                  <AuthProtectedRoute>
                    <UserOrders />
                  </AuthProtectedRoute>
                }
              />
              <Route
                path={`/user/:userID/transactions`}
                element={
                  <AuthProtectedRoute>
                    <UserTransactions />
                  </AuthProtectedRoute>
                }
              />
              <Route
                path={`/user/:userID/addresses`}
                element={
                  <AuthProtectedRoute>
                    <UserAddresses />
                  </AuthProtectedRoute>
                }
              />
            </Route>

            <Route
              path="/seller/dashboard"
              element={
                <AuthProtectedRoute>
                  <SellerProtectedRoute>
                    <DashboardHome />
                  </SellerProtectedRoute>
                </AuthProtectedRoute>
              }
            />
            <Route
              path="/seller/stock"
              element={
                <AuthProtectedRoute>
                  <SellerProtectedRoute>
                    <Stock />
                  </SellerProtectedRoute>
                </AuthProtectedRoute>
              }
            />

            <Route
              path="/seller/orders"
              element={
                <AuthProtectedRoute>
                  <SellerProtectedRoute>
                    <Orders />
                  </SellerProtectedRoute>
                </AuthProtectedRoute>
              }
            >
              <Route
                index
                element={
                  <AuthProtectedRoute>
                    <SellerProtectedRoute>
                      <OrdersFallbackUI />
                    </SellerProtectedRoute>
                  </AuthProtectedRoute>
                }
              />
              <Route
                path="/seller/orders/mapView"
                element={
                  <AuthProtectedRoute>
                    <SellerProtectedRoute>
                      <OrdersMapView />
                    </SellerProtectedRoute>
                  </AuthProtectedRoute>
                }
              />
              <Route
                path="/seller/orders/gridView"
                element={
                  <AuthProtectedRoute>
                    <SellerProtectedRoute>
                      <OrdersGridView />
                    </SellerProtectedRoute>
                  </AuthProtectedRoute>
                }
              />
            </Route>
            <Route
              path="/seller/transactions"
              element={
                <AuthProtectedRoute>
                  <SellerProtectedRoute>
                    <Transactions />
                  </SellerProtectedRoute>
                </AuthProtectedRoute>
              }
            />
            <Route
              path="/seller/panel"
              element={
                <AuthProtectedRoute>
                  <SellerProtectedRoute>
                    <AdminPanel />
                  </SellerProtectedRoute>
                </AuthProtectedRoute>
              }
            />
          </Routes>
        </ThemeProvider>
      )}
    </>
  );
};

export default App;
