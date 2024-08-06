import Layout from './components/layout/Layout';
import Home from './pages/Home'
import Error from './components/common/Error';
import { GlobalStyle } from './style/global';
import { ThemeProvider } from 'styled-components';
import { ThemeName, dark, getTheme, light } from './style/theme';
import ThemeSwicher from './components/header/ThemeSwicher';
import { useContext, useState } from 'react';
import { BookStoreThemeProvider, ThemeContext } from './context/ThemeContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Login from './pages/Login';
import Books from './pages/Books';
import BookDetail from './pages/BookDetail';
import Cart from './pages/Cart';
import Order from './pages/Order';
import OrderList from './pages/OrderList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
    errorElement: <Layout><Error /></Layout>
  },
  {
    path: "/books",
    element: <Layout><Books /></Layout>
  },
  {
    path: "/signup",
    element: <Layout><Signup /></Layout>
  },
  {
    path: "/reset",
    element: <Layout><ResetPassword /></Layout>
  },
  {
    path: "/login",
    element: <Layout><Login /></Layout>
  },
  {
    path: "/book/:bookId",
    element: <Layout><BookDetail /></Layout>
  },
  {
    path: "/cart",
    element: <Layout><Cart /></Layout>
  },
  {
    path: "/order",
    element: <Layout><Order /></Layout>
  },
  {
    path: "/orderList",
    element: <Layout><OrderList /></Layout>
  },
]);

function App() {

  return (
    <BookStoreThemeProvider>
      <ThemeSwicher /> 
        <RouterProvider router={router} />
    </BookStoreThemeProvider>
  );
}

export default App;

