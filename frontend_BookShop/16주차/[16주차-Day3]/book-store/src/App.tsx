import Layout from './components/layout/Layout';
import Home from './pages/Home'
import Error from './components/common/Error';
import ThemeSwicher from './components/header/ThemeSwicher';
import { BookStoreThemeProvider } from './context/ThemeContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Login from './pages/Login';
import Books from './pages/Books';
import BookDetail from './pages/BookDetail';
import Cart from './pages/Cart';
import Order from './pages/Order';
import OrderList from './pages/OrderList';
import { QueryClientProvider } from 'react-query';
import QueryClient from '@/api/queryClient';

const routeList = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/books",
    element: <Books />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/reset",
    element: <ResetPassword />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/book/:bookId",
    element: <BookDetail />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/order",
    element: <Order />
  },
  {
    path: "/orderList",
    element: <OrderList />
  },
]

const router = createBrowserRouter(routeList.map((item) => {
  return {
    ...item,
    element: <Layout>{item.element}</Layout>,
    errorElement: <Error />
  }
}));

function App() {

  return (
    <QueryClientProvider client={QueryClient}>
      <BookStoreThemeProvider>
        <ThemeSwicher /> 
          <RouterProvider router={router} />
      </BookStoreThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

