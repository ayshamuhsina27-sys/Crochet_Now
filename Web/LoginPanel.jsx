import { FiArrowRight, FiPackage, FiUser, FiX } from "react-icons/fi";

export function LoginPanel({
  email,
  onEmailChange,
  onClose,
  onSubmit,
  onShopSignIn,
  onOrdersClick,
  onProfileClick,
  statusMessage,
}) {
  return (
    <div className="absolute right-4 top-20 z-40 w-full max-w-[380px]">
      <div className="rounded-[2rem] bg-[#f6f6f6] p-5 shadow-2xl">
        <div className="mb-8 flex items-start justify-between gap-4">
          <h2 className="text-2xl font-medium text-[#2f2f2f]">
            Sign in or create account
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ebebeb] text-2xl text-[#2f2f2f]"
            aria-label="Close login"
          >
            <FiX />
          </button>
        </div>

        <button
          type="button"
          onClick={onShopSignIn}
          className="mb-6 w-full rounded-[1.5rem] bg-[#5b35f2] px-5 py-5 text-xl font-semibold text-white"
        >
          Sign in with shop
        </button>

        <div className="mb-6 flex items-center gap-4 text-[#666]">
          <div className="h-px flex-1 bg-[#d7d7d7]" />
          <span className="text-lg font-semibold">OR</span>
          <div className="h-px flex-1 bg-[#d7d7d7]" />
        </div>

        <form onSubmit={onSubmit} className="mb-6">
          <div className="flex items-center rounded-[1.5rem] border-2 border-[#404040] bg-transparent px-5 py-4">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 bg-transparent text-lg font-medium text-[#2f2f2f] outline-none placeholder:text-[#6c6c6c]"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
            />
            <button
              type="submit"
              className="min-w-10 text-3xl text-[#a3a3a3]"
              aria-label="Submit login"
            >
              <FiArrowRight />
            </button>
          </div>
        </form>

        {statusMessage && (
          <p className="mb-6 rounded-2xl bg-black/5 px-4 py-3 text-sm text-[#4b4b4b]">
            {statusMessage}
          </p>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <button
            type="button"
            onClick={onOrdersClick}
            className="flex items-center justify-center gap-3 rounded-[1.5rem] border border-[#d4d4d4] bg-[#f7f7f7] px-5 py-5 text-lg font-semibold text-[#2f2f2f]"
          >
            <FiPackage className="text-2xl" />
            Orders
          </button>
          <button
            type="button"
            onClick={onProfileClick}
            className="flex items-center justify-center gap-3 rounded-[1.5rem] border border-[#d4d4d4] bg-[#f7f7f7] px-5 py-5 text-lg font-semibold text-[#2f2f2f]"
          >
            <FiUser className="text-2xl" />
            Profile
          </button>
        </div>
      </div>
    </div>
  );
}
