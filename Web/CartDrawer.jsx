import { FiMinus, FiPlus, FiTrash2, FiX } from "react-icons/fi";

import gift from "../assets/Gift.webp";
import { useCart } from "../hooks/useCart";

function formatPrice(value) {
  return `Rs. ${value.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function CartDrawer({ open, onClose }) {
  const { cart, updateQuantity, removeFromCart, itemCount, estimatedTotal } = useCart();

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/30">
      <button
        type="button"
        aria-label="Close cart overlay"
        className="h-full flex-1 cursor-default"
        onClick={onClose}
      />
      <aside className="flex h-full w-full max-w-[720px] flex-col bg-[#f8f8f8] px-8 py-6 shadow-2xl">
        <div className="mb-8 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-5xl font-medium text-[#262626]">Cart</h2>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ececec] text-xl font-semibold text-[#303030]">
              {itemCount}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-[#303030] text-4xl text-[#303030]"
            aria-label="Close cart"
          >
            <FiX />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto pr-2">
          {cart.length === 0 ? (
            <p className="py-20 text-xl text-[#525252]">No items in cart</p>
          ) : (
            cart.map((item, index) => (
              <div key={item.id} className={index > 0 ? "border-t border-[#dddddd] pt-10" : ""}>
                <div className="grid grid-cols-[84px_1fr_auto] gap-6 pb-10">
                  <img
                    src={gift}
                    alt="Gift Card"
                    className="h-[84px] w-[84px] rounded-sm object-cover"
                  />
                  <div>
                    <h3 className="mb-3 text-3xl font-semibold text-[#2b2b2b]">
                      Buy Gift Card
                    </h3>
                    <p className="text-2xl font-semibold text-[#565656]">
                      {formatPrice(item.amount)}
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-[#565656]">
                      {formatPrice(item.amount)}
                    </p>
                    <div className="mt-8 flex items-center gap-10">
                      <div className="flex items-center rounded-xl border border-[#d5d5d5] bg-white px-5 py-4">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 text-4xl text-[#333]"
                        >
                          <FiMinus />
                        </button>
                        <span className="px-8 text-3xl font-semibold text-[#333]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 text-4xl text-[#333]"
                        >
                          <FiPlus />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-4xl text-[#2f2f2f]"
                        aria-label="Remove item"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                  <div className="text-right text-3xl text-[#3a3a3a]">
                    {formatPrice(item.amount * item.quantity)}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-[#dddddd] pt-8">
          <div className="flex items-center justify-between border-b border-[#dddddd] py-6 text-2xl font-semibold text-[#333]">
            <span>Special instructions</span>
            <span className="text-4xl font-normal">+</span>
          </div>
          <div className="flex items-center justify-between border-b border-[#dddddd] py-6 text-2xl font-semibold text-[#333]">
            <span>Discount</span>
            <span className="text-4xl font-normal">+</span>
          </div>
          <div className="flex items-end justify-between py-8">
            <div>
              <p className="mb-4 text-3xl font-semibold text-[#333]">Estimated total</p>
              <p className="text-xl font-medium text-[#555]">
                Duties and taxes included. Shipping is calculated at checkout.
              </p>
            </div>
            <p className="text-4xl text-[#333]">{formatPrice(estimatedTotal)}</p>
          </div>
          <button
            type="button"
            className="w-full rounded-[1.75rem] bg-black py-6 text-3xl font-semibold text-white"
          >
            Check out
          </button>
        </div>
      </aside>
    </div>
  );
}
