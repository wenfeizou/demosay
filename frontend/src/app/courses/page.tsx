import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              课程包（29365个）
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              由EVE Frontier 官方、联盟和 Builder 提供
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">EVE Frontier 101</h3>
                <p className="mb-2 text-gray-500">
                  先读懂 EVE Frontier 这款游戏：玩家在争夺什么、设施为什么重要、位置/战损/物流/经济如何串成完整玩法
                </p>
                <a
                  className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  href="/courses/eve-frontier-101"
                >
                  {'Play->'}
                </a>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">How to Install Sui</h3>
                <p className="mb-2 text-gray-500">
                  To create objects, submit transactions, and start building an application on Sui, first you must install Sui. This installation includes the Sui CLI, a tool that creates and manages address
                   balances, builds and publishes smart contracts, and queries information from the network.
                </p>
                <a
                  className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  href="#"
                >
                  {'Play->'}
                </a>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">EVE Frontier 101</h3>
                <p className="mb-2 text-gray-500">
                  先读懂 EVE Frontier 这款游戏：玩家在争夺什么、设施为什么重要、位置/战损/物流/经济如何串成完整玩法
                </p>
                <a
                  className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  href="/courses/eve-frontier-101"
                >
                  {'Play->'}
                </a>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">How to Install Sui</h3>
                <p className="mb-2 text-gray-500">
                  To create objects, submit transactions, and start building an application on Sui, first you must install Sui. This installation includes the Sui CLI, a tool that creates and manages address
                   balances, builds and publishes smart contracts, and queries information from the network.
                </p>
                <a
                  className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  href="#"
                >
                  {'Play->'}
                </a>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">EVE Frontier 101</h3>
                <p className="mb-2 text-gray-500">
                  先读懂 EVE Frontier 这款游戏：玩家在争夺什么、设施为什么重要、位置/战损/物流/经济如何串成完整玩法
                </p>
                <a
                  className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  href="/courses/eve-frontier-101"
                >
                  {'Play->'}
                </a>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">How to Install Sui</h3>
                <p className="mb-2 text-gray-500">
                  To create objects, submit transactions, and start building an application on Sui, first you must install Sui. This installation includes the Sui CLI, a tool that creates and manages address
                   balances, builds and publishes smart contracts, and queries information from the network.
                </p>
                <a
                  className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  href="#"
                >
                  {'Play->'}
                </a>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">EVE Frontier 101</h3>
                <p className="mb-2 text-gray-500">
                  先读懂 EVE Frontier 这款游戏：玩家在争夺什么、设施为什么重要、位置/战损/物流/经济如何串成完整玩法
                </p>
                <a
                  className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  href="/courses/eve-frontier-101"
                >
                  {'Play->'}
                </a>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">How to Install Sui</h3>
                <p className="mb-2 text-gray-500">
                  To create objects, submit transactions, and start building an application on Sui, first you must install Sui. This installation includes the Sui CLI, a tool that creates and manages address
                   balances, builds and publishes smart contracts, and queries information from the network.
                </p>
                <a
                  className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  href="#"
                >
                  {'Play->'}
                </a>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">EVE Frontier 101</h3>
                <p className="mb-2 text-gray-500">
                  先读懂 EVE Frontier 这款游戏：玩家在争夺什么、设施为什么重要、位置/战损/物流/经济如何串成完整玩法
                </p>
                <a
                  className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  href="/courses/eve-frontier-101"
                >
                  {'Play->'}
                </a>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">How to Install Sui</h3>
                <p className="mb-2 text-gray-500">
                  To create objects, submit transactions, and start building an application on Sui, first you must install Sui. This installation includes the Sui CLI, a tool that creates and manages address
                   balances, builds and publishes smart contracts, and queries information from the network.
                </p>
                <a
                  className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  href="#"
                >
                  {'Play->'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
            用户说
          </h2>
          <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
            <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
              <div className="text-center text-gray-600">
                “「通过使用 DemoSay，我快速了解了游戏框架和基本玩法，已经在下载游戏了！」”
              </div>
              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <img
                    alt="Photo by Radu Florin"
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                  />
                </div>
                <div>
                  <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
                    Jack
                  </div>
                  <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                    王者荣耀资深玩家
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
              <div className="text-center text-gray-600">
                “「通过使用 DemoSay，我快速了解了游戏框架和基本玩法，已经在下载游戏了！」”
              </div>
              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <img
                    alt="Photo by christian ferrer"
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112"
                  />
                </div>
                <div>
                  <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
                    Joy
                  </div>
                  <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                    王者荣耀资深玩家
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
              <div className="text-center text-gray-600">
                “「通过使用 DemoSay，我快速了解了游戏框架和基本玩法，已经在下载游戏了！」”
              </div>
              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <img
                    alt="Photo by Ayo Ogunseinde"
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500"
                  />
                </div>
                <div>
                  <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
                    Tom
                  </div>
                  <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                    王者荣耀资深玩家
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
