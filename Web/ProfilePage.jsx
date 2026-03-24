import header from "../assets/header.webp";

export function ProfilePage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-black px-6 py-16 text-white">
      <div className="w-full max-w-[520px] rounded-[2rem] bg-[#1d1d1d] px-10 py-12 shadow-2xl">
        <div className="mb-10 text-center">
          <img
            src={header}
            alt="Crochet Now India"
            className="mx-auto h-auto w-full max-w-[200px] object-contain opacity-80"
          />
        </div>

        <h1 className="mb-2 text-3xl font-semibold">Sign in</h1>
        <p className="mb-6 text-base text-white/60">
          Sign in or create an account
        </p>

        <button
          type="button"
          className="mb-6 w-full rounded-[1.4rem] bg-[#5b35f2] px-5 py-4 text-lg font-semibold text-white"
        >
          Continue with shop
        </button>

        <div className="mb-6 flex items-center gap-4 text-white/60">
          <div className="h-px flex-1 bg-white/15" />
          <span className="text-sm font-semibold">or</span>
          <div className="h-px flex-1 bg-white/15" />
        </div>

        <div className="mb-4 rounded-[1.4rem] border border-[#1e88da] bg-transparent px-5 py-4 text-lg text-white/70">
          Email
        </div>

        <button
          type="button"
          className="mb-6 w-full rounded-[1.1rem] bg-[#1e88da] px-5 py-4 text-lg font-semibold text-white"
        >
          Continue
        </button>

        <p className="text-center text-xs text-white/50">
          By continuing, you agree to our{" "}
          <span className="underline">Terms of service</span>
        </p>
      </div>

      <div className="absolute bottom-10 text-sm text-[#1e88da]">Privacy policy</div>
    </div>
  );
}
