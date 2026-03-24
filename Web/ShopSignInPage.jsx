import { useState } from "react";
import { useNavigate } from "react-router-dom";
import header from "../assets/header.webp";

const SHOP_EMAIL_KEY = "shopEmail";

export function ShopSignInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      return;
    }

    window.localStorage.setItem(SHOP_EMAIL_KEY, email.trim());
    navigate("/shop-verify");
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-white px-6 py-12 text-[#111]">
      <div className="flex w-full max-w-[900px] flex-col items-center rounded-[2.2rem] bg-white px-10 py-16">
        <div className="mb-10 flex items-center justify-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#5a3df5] text-3xl font-semibold text-white">
            shop
          </div>
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-[#d6d6d6]" />
            <span className="h-2 w-2 rounded-full bg-[#d6d6d6]" />
            <span className="h-2 w-2 rounded-full bg-[#d6d6d6]" />
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#e2e2e2] bg-white">
            <img src={header} alt="Crochet Now India" className="h-12 w-12 object-contain" />
          </div>
        </div>

        <h1 className="mb-3 text-center text-4xl font-semibold text-[#111]">Sign in to Shop</h1>
        <p className="mb-10 text-center text-lg text-[#666]">
          To continue to <span className="font-semibold text-[#222]">Crochet Now India</span>
        </p>

        <form onSubmit={handleSubmit} className="mb-6 flex w-full flex-col items-center gap-6">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-16 w-full max-w-[520px] rounded-full border border-[#1c1c1c] px-6 text-lg outline-none"
          />
          <button
            type="submit"
            className="h-16 w-full max-w-[520px] rounded-full bg-[#4e2dd9] text-lg font-semibold text-white shadow-lg"
          >
            Continue
          </button>
        </form>

        <button type="button" className="mx-auto mt-2 text-lg font-semibold text-[#111]">
          Sign in with a passkey
        </button>

        <p className="mt-10 text-center text-sm text-[#777]">
          By continuing, you agree to Shop’s terms, privacy policy, and to sharing your name and email with
          Crochet Now India. See their terms and privacy policy.
        </p>
      </div>
    </section>
  );
}
