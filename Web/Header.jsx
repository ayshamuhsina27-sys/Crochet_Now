import { useEffect, useState } from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import header from "../assets/header.webp";
import { CartDrawer } from "./CartDrawer";
import { LoginPanel } from "./LoginPanel";
import { SearchPanel } from "./SearchPanel";
import { CART_OPEN_EVENT, useCart } from "../hooks/useCart";

export function Header() {
  const navigate = useNavigate();
  const { itemCount } = useCart();
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const openCart = () => setShowCart(true);
    window.addEventListener(CART_OPEN_EVENT, openCart);

    return () => {
      window.removeEventListener(CART_OPEN_EVENT, openCart);
    };
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchTerm.trim().toLowerCase();
    if (!query) {
      return;
    }

    if (query.includes("cart")) {
      navigate("/cart");
    } else if (query.includes("gift")) {
      navigate("/Giftcards");
    } else if (query.includes("yarn guide")) {
      navigate("/YarnGuide");
    } else if (query.includes("contact")) {
      navigate("/contact");
    } else if (query.includes("about")) {
      navigate("/about");
    }

    setSearchTerm("");
    setShowSearch(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatusMessage("Enter your email first.");
      return;
    }

    window.localStorage.setItem("loginEmail", email);
    closeLoginPanel();
    navigate("/login-code", { state: { email } });
  };

  const handleShopSignIn = () => {
    closeLoginPanel();
    navigate("/shop-signin");
  };

  const handleOrdersClick = () => {
    closeLoginPanel();
    navigate("/orders");
  };

  const handleProfileClick = () => {
    closeLoginPanel();
    navigate("/profile");
  };

  const handleCartClick = () => {
    setShowCart(true);
  };

  const closeLoginPanel = () => {
    setShowLogin(false);
    setStatusMessage("");
  };

  return (
    <header className="header relative">
      <img src={header} alt="Header" />
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/Yarns">Yarns</Link>
        <Link to="/Accessories">Accessories</Link>
        <Link to="/OnlineClasses">Online Classes</Link>
        <Link to="/YarnGuide">Yarn Guide</Link>
        <Link to="/GiftCards">Gift Cards</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/best-yarn-store-india">The Best Yarn Store in India</Link>
      </nav>

      <div className="flex gap-6 text-xl text-gray-700">
        <button
          type="button"
          onClick={() => {
            setShowLogin(false);
            setShowSearch((prev) => !prev);
          }}
          className="cursor-pointer hover:text-black"
          aria-label="Open search"
        >
          <FiSearch />
        </button>

        <button
          type="button"
          onClick={() => {
            setShowSearch(false);
            setStatusMessage("");
            setShowLogin((prev) => !prev);
          }}
          className="cursor-pointer hover:text-black"
          aria-label="Open login"
        >
          <FiUser />
        </button>

        <button
          type="button"
          onClick={handleCartClick}
          className="relative cursor-pointer hover:text-black"
          aria-label="Open cart"
        >
          <FiShoppingCart />
          {itemCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[10px] text-white">
              {itemCount}
            </span>
          )}
        </button>
      </div>

      {showSearch && (
        <SearchPanel
          searchTerm={searchTerm}
          onSearchTermChange={setSearchTerm}
          onSubmit={handleSearchSubmit}
          onClose={() => setShowSearch(false)}
        />
      )}

      {showLogin && (
        <LoginPanel
          email={email}
          onEmailChange={setEmail}
          onClose={closeLoginPanel}
          onSubmit={handleLoginSubmit}
          onShopSignIn={handleShopSignIn}
          onOrdersClick={handleOrdersClick}
          onProfileClick={handleProfileClick}
          statusMessage={statusMessage}
        />
      )}

      <CartDrawer open={showCart} onClose={() => setShowCart(false)} />
    </header>
  );
}
