import { createBrowserRouter } from 'react-router';
import { RootLayout } from './layout/RootLayout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { About } from './pages/About';
import { OurMethod } from './pages/OurMethod';
import { HowItWorksPoop } from './pages/HowItWorksPoop';
import { HowItWorksHome } from './pages/HowItWorksHome';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart';
import { Wishlist } from './pages/Wishlist';
import { Login } from './pages/Login';
import { CreateAccount } from './pages/CreateAccount';
import { Account } from './pages/Account';
import { Checkout } from './pages/Checkout';
import { OrderConfirmation } from './pages/OrderConfirmation';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'product/:id', element: <ProductDetail /> },
      { path: 'about', element: <About /> },
      { path: 'our-method', element: <OurMethod /> },
      { path: 'how-it-works-poop', element: <HowItWorksPoop /> },
      { path: 'how-it-works-home', element: <HowItWorksHome /> },
      { path: 'contact', element: <Contact /> },
      { path: 'cart', element: <Cart /> },
      { path: 'wishlist', element: <Wishlist /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'order-confirmation', element: <OrderConfirmation /> },
      { path: 'login', element: <Login /> },
      { path: 'create-account', element: <CreateAccount /> },
      { path: 'account', element: <Account /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);