import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Socials from './components/Socials';
import Footer from './components/Footer';
import Advocacy from "./components/Advocacy";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Trailer from "./components/Trailer";
import Features from "./components/Features";
import Team from "./components/Team";
import Ceo from "./components/Ceo";
import Advocacyprograms from "./pages/Advocacyprograms";
import Contact from "./components/Contact";
import ImageSlider from "./components/ImageSlider";
import Shop from "./pages/Shop";
import ItemDetails from "./pages/ItemDetails";
import CustomerSupport from "./pages/CustomerSupport";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Cart from "./pages/Cart";
import SignUp from "./components/shop/SignUp";
import SignIn from "./components/shop/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import OrderSuccess from "./pages/OrderSuccess";
import Subscription from "./components/Subscription";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoutes";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCallback from "./pages/PaymentCallback";
import ShopFooter from "./components/shop/ShopFooter";
function App() {
  const location = useLocation();
  const shopPaths = ["/shop", "/cart", "/privacy-policy", "/customer-support"];
  const isShopPage = shopPaths.includes(location.pathname);

  return (
    <div className="overflow-hidden">

      <AuthProvider>
      <Navbar />
        <Routes>

          {/* Public pages */}
          <Route path="/" element={
            <>
              <Home />
              <Features />
              <About />
              <Trailer />
              <Advocacy />
              <Ceo />
              <Team />
              <Subscription />
              <Socials />
              <ImageSlider />
              <Contact />
            </>
          } />

          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-callback" element={<PaymentCallback />} />

          <Route path="/advocacy-program/:id" element={<Advocacyprograms />} />
          <Route path="/customer-support" element={<CustomerSupport />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Protected pages */}
          <Route
            path="/shop"
            element={<Shop />}
          />

          <Route
            path="/cart"
            element={<ProtectedRoute><Cart /></ProtectedRoute>}
          />

          <Route
            path="/item/:id"
            element={<ItemDetails />  }
          />

          <Route
            path="/order-success/:orderId"
            element={<ProtectedRoute><OrderSuccess /></ProtectedRoute>}
          />

        </Routes>
      </AuthProvider>

      {/* Footer outside Routes */}
     {isShopPage ? <ShopFooter /> : <Footer />} 

    </div>
  );
}

export default App;
