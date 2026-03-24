import { useState } from "react";

export function Email() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setEmail("");
    }, 2000);
  };

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
 
        <div>
          <h3 className="text-2xl font-extralight mb-1">
            Join our email list
          </h3>
          <p className="text-sm text-gray-600">
            Get exclusive deals and early access to new products.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[520px] flex items-center border rounded-full px-4"
        >
          <input
            type="email"
            required
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-4 text-sm outline-none bg-transparent"
          />

          <button
            type="submit"
            disabled={loading}
            className="text-xl px-4 disabled:opacity-50"
          >
            {loading ? "…" : "→"}
          </button>
        </form>
      </div>

      {success && (
        <p className="text-right text-green-600 text-sm mt-6">
          Thanks for subscribing 
        </p>
      )}
    </section>
  );
}
