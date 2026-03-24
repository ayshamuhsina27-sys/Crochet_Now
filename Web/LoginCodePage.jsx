import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import header from "../assets/header.webp";


const LOGIN_EMAIL_KEY = "loginEmail";

export function LoginCodePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email || "");
  const [code, setCode] = useState("");

  useEffect(() => {
    const savedEmail = location.state?.email || window.localStorage.getItem(LOGIN_EMAIL_KEY) || "";
    if (!savedEmail) {
      navigate("/", { replace: true });
      return;
    }

    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, [location.state, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!code.trim()) {
      alert("Enter the code first.");
      return;
    }

    console.log("Code submitted:", { email, code });
    alert(`Code submitted for "${email}"`);
    window.localStorage.removeItem(LOGIN_EMAIL_KEY);
    navigate("/", { replace: true });
  };

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-black px-4 py-12">
      <div className="w-full max-w-[640px] rounded-[1.8rem] bg-[#171717] px-10 py-12 text-white shadow-2xl">
        <div className="mb-14 text-center">
          <img
            src={header}
            alt="Crochet Now India"
            className="mx-auto h-auto w-full max-w-[260px] object-contain"
          />
        </div>

        <h1 className="mb-3 text-4xl font-semibold text-white">Enter code</h1>
        <p className="mb-8 text-xl text-white/65">Sent to {email}</p>

        <form onSubmit={handleSubmit} className="mb-8 flex flex-col gap-5">
          <input
            type="text"
            inputMode="numeric"
            maxLength={6}
            placeholder="6-digit code"
            className="w-full rounded-[1rem] border-2 border-[#1e88da] bg-transparent px-5 py-5 text-xl text-white outline-none placeholder:text-white/50"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            type="submit"
            className="w-full rounded-[1rem] bg-[#2b80bf] py-5 text-xl font-semibold text-white"
          >
            Submit
          </button>
        </form>

        <button
          type="button"
          onClick={() => {
            window.localStorage.removeItem(LOGIN_EMAIL_KEY);
            navigate("/", { replace: true });
          }}
          className="text-lg text-[#2794ea]"
        >
          Sign in with a different email
        </button>
      </div>
    </section>
  );
}
