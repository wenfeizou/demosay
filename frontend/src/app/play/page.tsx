import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              01-EVE Frontier 101
            </h2>
            <div className="mx-auto max-w-3xl text-left text-gray-500 md:text-lg">
              <p>
                - Demo: EVE Frontier 是由谁开发和运营的？
              </p>
              <p>
                - Say: ____
              </p>
              <div className="mx-auto max-w-3xl text-center text-gray-500 md:text-lg">
                <button className="mt-4 inline-block rounded-lg bg-blue-600 px-8 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring">
                  上一题
                </button>
                <button className="mt-4 inline-block rounded-lg bg-blue-600 px-8 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring">
                  下一题
                </button>
              </div>
            </div>
            <div className="mx-auto max-w-3xl text-left text-gray-500 md:text-lg">
              <h2>快捷键</h2>
              <p>
                - Commad + [: 发音读出答案
              </p>
              <p>
                - Command + ]: 文本显示答案
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
