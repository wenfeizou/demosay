import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              EVE Frontier 101
            </h2>
            <div className="mx-auto max-w-3xl text-center text-gray-500 md:text-lg">
              <button>
                PLAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
