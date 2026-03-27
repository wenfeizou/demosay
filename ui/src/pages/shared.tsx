import { AppLink } from "../components/AppLink";
import { featureCardClassName } from "../ui";

export type PackageItem = {
  description: string;
  href: string;
  title: string;
};

export const packageItems: PackageItem[] = [
  {
    title: "EVE Frontier 101",
    description:
      "先读懂 EVE Frontier 这款游戏：玩家在争夺什么、设施为什么重要、位置/战损/物流/经济如何串成完整玩法",
    href: "/packages/eve-frontier-101",
  },
  {
    title: "探索 Sui 系列：(2) 了解你的钱包",
    description:
      "什么是加密钱包、他如何运作，以及”自托管“究竟意味着什么。",
    href: "/packages/sui-wallet",
  },
  {
    title: "Demo of DemoSay",
    description:
      "Sui Hacker House Changsha DemoDay 现场演示 DemoSay 项目",
    href: "/packages/demosay",
  },
];

export function FeatureIcon() {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-400 text-slate-950 shadow-lg md:h-14 md:w-14 md:rounded-xl">
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
  );
}

export function PackageCard({ item }: { item: PackageItem }) {
  return (
    <AppLink
      className="font-bold text-cyan-300 transition duration-100 hover:text-cyan-200 active:text-cyan-100"
      href={item.href}
    >
      <div className={featureCardClassName}>
        <FeatureIcon />
        <div className="flex flex-col items-start gap-6">
          <h3 className="mb-2 text-lg font-semibold md:text-xl">{item.title}</h3>
          <p className="mb-2 text-slate-300">{item.description}</p>
            详情-&gt;
        </div>
      </div>
    </AppLink>
  );
}
