import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import gift from "../assets/Gift.webp";
import { useCart } from "../hooks/useCart";


export function GiftCard() {
  const { addToCart } = useCart();
  const [amount, setAmount] = useState(3000);
  const [sendTo, setSendTo] = useState("me");
  const [qty, setQty] = useState(1);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const denominations = [500, 1000, 1500, 2000, 2500, 3000];

  const handleAddToCart = () => {
    if (!email.trim()) {
      setMessage("Enter an email first.");
      return;
    }

    const giftCardItem = {
      id: crypto.randomUUID(),
      type: "gift-card",
      amount,
      sendTo,
      email,
      quantity: qty,
      createdAt: new Date().toISOString(),
    };

    addToCart(giftCardItem, { openDrawer: true });
    setMessage("Gift card added to cart.");
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

    
        <div className="rounded-3xl overflow-hidden">
          
            <img src= {gift} alt="Gift" className="w-full h-full object-cover" />
        
        </div>

       
        <div>
          <h1 className="text-3xl font-semibold mb-4">Buy Gift Card</h1>

          <p className="text-xl font-medium mb-1">Rs. {amount.toLocaleString()}.00</p>
          <p className="text-sm text-gray-500 mb-8">
            Taxes included. Shipping calculated at checkout.
          </p>

         
          <div className="mb-8">
            <p className="font-medium mb-4">Denominations</p>
            <div className="grid grid-cols-3 gap-4">
              {denominations.map((value) => (
                <button
                  key={value}
                  onClick={() => setAmount(value)}
                  className={`border rounded-xl py-3 text-sm font-medium transition
                    ${amount === value
                      ? "bg-black text-white"
                      : "bg-white hover:border-black"
                    }`}
                >
                  ₹{value.toLocaleString()}.00
                </button>
              ))}
            </div>
          </div>

        
          <div className="mb-8">
            <p className="font-medium mb-4">Send to</p>
            <div className="flex gap-4">
              <button
                onClick={() => setSendTo("me")}
                className={`flex-1 border rounded-xl py-3 text-sm font-medium
                  ${sendTo === "me" ? "bg-black text-white" : ""}`}
              >
                My email
              </button>
              <button
                onClick={() => setSendTo("recipient")}
                className={`flex-1 border rounded-xl py-3 text-sm font-medium
                  ${sendTo === "recipient" ? "bg-black text-white" : ""}`}
              >
                Recipient’s email
              </button>
            </div>
          </div>

          <div className="mb-8">
            <label className="mb-4 block font-medium">
              {sendTo === "me" ? "My email" : "Recipient's email"}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={sendTo === "me" ? "Enter your email" : "Enter recipient email"}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          
          <div className="flex gap-4 mb-4">
            <div className="flex items-center border rounded-xl px-4">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span className="px-6">{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 bg-black text-white rounded-xl flex items-center justify-center gap-3"
            >
              <FaShoppingCart />
              Add to cart
            </button>
          </div>

          {message && (
            <p className="mb-6 text-sm text-gray-600">{message}</p>
          )}

         
          <button className="w-full bg-black text-white py-4 rounded-xl font-medium mb-8">
            Buy it now
          </button>

        
          <p className="text-sm text-gray-600 leading-relaxed">
            Give the gift of craftiness with Crochet Now's Gift Card! Use it to
            buy yarn and inspire your loved ones to knit, crochet, and create
            to their heart’s content. Perfect for any occasion, from birthdays
            to holidays. No need to search for the perfect gift, this gift card
            has got you covered!
          </p>
        </div>
      </div>
    </section>
  );
}
