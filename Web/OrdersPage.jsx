export function OrdersPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-black px-6 py-16 text-white">
      <div className="w-full max-w-[520px] rounded-[2rem] bg-[#1d1d1d] px-10 py-12 text-center shadow-2xl">
        <div className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-white/40">
          Crochet Now India
        </div>
        <h1 className="mb-3 text-3xl font-semibold">Orders</h1>
        <p className="text-base text-white/70">
          Your orders will appear here after you sign in and place an order.
        </p>
        <button
          type="button"
          className="mt-8 w-full rounded-[1.2rem] bg-[#5b35f2] px-5 py-4 text-lg font-semibold text-white"
        >
          View Orders
        </button>
        <p className="mt-6 text-sm text-white/50">Privacy policy</p>
      </div>
    </div>
  );
}
