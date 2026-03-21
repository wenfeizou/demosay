import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              You Demo, I Say
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Start
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:gap-12 xl:grid-cols-1 xl:gap-16">
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
                <Link
                  className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  href="/courses/eve-frontier-101"
                >
                  {'Play->'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
