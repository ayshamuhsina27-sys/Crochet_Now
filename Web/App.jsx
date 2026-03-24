import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About } from './components/about';
import { Home } from './components/home';
import { Services } from './components/services';
import { Cart } from "./components/Cart";
import { Contact } from './components/contact';
import { ContactDetails } from "./components/ContactDetails";
import { Detail } from "./components/detail";
import { Email } from "./components/email";
import { Abouthome } from "./components/abouthome";
import { GiftCard } from "./components/Giftcard";
import { Header } from "./components/Header";
import { LoginCodePage } from "./components/LoginCodePage";
import { YarnGuide } from "./components/yarnGuide";
import { YarnDetails } from "./components/YarnDetails";
import { BestYarn } from "./components/BestYarnStoreIndia";
import { BestYarnDetails } from "./components/BestYarnDetails";
import { ShopSignInPage } from "./components/ShopSignInPage";
import { ShopVerifyPage } from "./components/ShopVerifyPage";
import { OrdersPage } from "./components/OrdersPage";
import { ProfilePage } from "./components/ProfilePage";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Crochet Now India. All Rights Reserved.</p>
    </footer>
  );
}

function Layout({ children }) {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto grow">{children}</main>
    </div>
    </>
  );
}

function NotFound() {
  return (
    <>
      <h1 className="page-title">
      404
      <br />
      Page not found.
      </h1>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-code" element={<LoginCodePage />} />
        <Route path="/shop-signin" element={<ShopSignInPage />} />
        <Route path="/shop-verify" element={<ShopVerifyPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route
          path="*"
          element={
            <>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home/>} />
                   <Route path="/YarnGuide" element={<YarnGuide /> } />
                  <Route path="/yarn-details" element={<YarnDetails />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/Giftcards" element={<GiftCard />} />
                  <Route path="/contact-us" element={<ContactDetails />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/best-yarn-store-india" element={<BestYarn /> } />
                  <Route path="/best-yarn-store-india/full" element={<BestYarnDetails /> } />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
              <Abouthome/>
              <Detail/>
              <Email/>
              <Footer/>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
