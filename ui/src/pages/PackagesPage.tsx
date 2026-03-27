import { PackageCard, packageItems } from "./shared";

const repeatedPackages = Array.from({ length: 8 }, (_, index) =>
  packageItems[index % packageItems.length],
);

export function PackagesPage() {
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col gap-8 items-center pb-10 mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-slate-50 md:mb-6 lg:text-3xl">
            Demo Packages（8个）
          </h2>
          <p className="mx-auto max-w-3xl text-center text-slate-300 md:text-lg">
            由 EVE Frontier 官方、Sui 等发布
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
          {repeatedPackages.map((item, index) => (
            <PackageCard key={`${item.title}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
