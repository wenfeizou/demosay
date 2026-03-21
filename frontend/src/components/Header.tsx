import Image from "next/image";
import Link from "next/link";
export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-90 shadow-lg">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <header className="flex items-center justify-between py-4 md:py-8">
          <Link
            aria-label="logo"
            className="inline-flex items-start gap-0.5 md:gap-1.5 text-xl font-bold text-black md:text-3xl"
            href="/"
          >
            <img src="/logo.png" alt="Logo" width={24} className="text-xs w-[12px] md:w-[24px] md:text-lg" />
            <span className="text-xs md:text-lg">DemoSay</span>
          </Link>
          <nav className="flex gap-2 md:gap-12">
            <Link
              className="text-sm font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 md:text-lg"
              href="/courses"
            >
              课程包
            </Link>
            <Link
              className="text-sm font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 md:text-lg"
              href="/how-to-use"
            >
              如何使用
            </Link>
            <Link
              className="text-sm font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 md:text-lg"
              href="/pricing"
            >
              价格
            </Link>
            <Link
              className="text-sm font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 md:text-lg"
              href="/faq"
            >
              常见问题
            </Link>
            <Link
              className="text-sm font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 md:text-lg"
              href="/about"
            >
              关于
            </Link>
          </nav>
          <a
            className="rounded-lg bg-gray-200 px-2 md:px-8 py-1 md:py-3 text-center text-xs  font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
            href="/user/signin"
          >
            Connect to EVE Vault
          </a>
        </header>
      </div>
    </header>
  );
}
