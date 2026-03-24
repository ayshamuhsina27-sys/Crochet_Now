import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const SHOP_EMAIL_KEY = "shopEmail";
const CODE_LENGTH = 6;

export function ShopVerifyPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(Array.from({ length: CODE_LENGTH }, () => ""));

  useEffect(() => {
    const storedEmail = window.localStorage.getItem(SHOP_EMAIL_KEY);
    if (!storedEmail) {
      navigate("/shop-signin", { replace: true });
      return;
    }

    setEmail(storedEmail);
  }, [navigate]);

  const codeValue = useMemo(() => code.join(""), [code]);

  const handleChange = (index, value) => {
    const next = [...code];
    next[index] = value.slice(-1);
    setCode(next);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (codeValue.length !== CODE_LENGTH) {
      return;
    }

    // Placeholder submit flow
    window.localStorage.removeItem(SHOP_EMAIL_KEY);
    navigate("/", { replace: true });
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-white px-6 py-12 text-[#111]">
      <div className="w-full max-w-[900px] text-center">
        <div className="mb-8 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#2b1b7c] text-2xl text-white">
            ✉
          </div>
        </div>
        <h1 className="text-4xl font-semibold">Verify your email</h1>
        <p className="mt-2 text-lg text-gray-500">Enter code sent to</p>
        <p className="mt-1 text-lg font-semibold text-gray-900">{email}</p>

        <form onSubmit={handleSubmit} className="mt-10 flex flex-col items-center gap-8">
          <div className="flex items-center gap-4">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                className="h-16 w-16 rounded-2xl border border-gray-200 text-center text-2xl outline-none focus:border-black"
              />
            ))}
          </div>

          <button
            type="submit"
            className="rounded-full bg-black px-10 py-3 text-lg font-semibold text-white"
          >
            Continue
          </button>
        </form>

        <button
          type="button"
          onClick={() => {
            window.localStorage.removeItem(SHOP_EMAIL_KEY);
            navigate("/shop-signin", { replace: true });
          }}
          className="mt-8 text-sm font-semibold text-gray-700"
        >
          Change email address
        </button>
      </div>
    </section>
  );
}
