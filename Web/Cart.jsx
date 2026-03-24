import { useCart } from "../hooks/useCart";

export  function Cart() {
  const { cart, estimatedTotal } = useCart();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Cart</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded mb-4"
          >
            <p className="font-semibold">
              Gift Card - Rs. {item.amount}
            </p>
            <p>Send to: {item.sendTo === "me" ? "My email" : "Recipient email"}</p>
            <p>Email: {item.email}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <p className="mt-6 text-xl font-semibold">
          Estimated total: Rs. {estimatedTotal.toLocaleString("en-IN")}
        </p>
      )}
    </div>
  );
}
