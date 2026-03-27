import { AppLink } from "../components/AppLink";
import { FeatureIcon } from "./shared";
import { featureCardClassName } from "../ui";

const lessons = Array.from({ length: 8 }, (_, index) => ({
  title: `Demo ${String(index + 1).padStart(2, "0")}`,
  description:
    "先读懂 EVE Frontier 这款游戏：玩家在争夺什么、设施为什么重要、位置/战损/物流/经济如何串成完整玩法",
}));

export function PackageDetailPage({ id }: { id: string }) {
  const packageTitle = id
    .split("-")
    .map((part) =>
      part.length > 3 ? part[0]!.toUpperCase() + part.slice(1) : part.toUpperCase(),
    )
    .join(" ");

  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center gap-8 pb-10 mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-slate-50 md:mb-6 lg:text-3xl">
            {packageTitle} (8轮游戏)
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-slate-300 md:text-lg">
            Package ID: {id}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:gap-12 xl:grid-cols-4 xl:gap-16">
          {lessons.map((lesson) => (
            <AppLink
              className="font-bold text-cyan-300 transition duration-100 hover:text-cyan-200 active:text-cyan-100"
              href="/play/0e3s8r8KlHMNhzTT1BYIto96VAvTvJdLVecTRNihJFg"
            >
              <div key={lesson.title} className={featureCardClassName}>
                <FeatureIcon />
                <div className="flex flex-col items-start gap-6">
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    {lesson.title}
                  </h3>
                  <p className="mb-2 text-slate-300">{lesson.description}</p>
                    Play-&gt;
                </div>
              </div>
            </AppLink>
          ))}
        </div>
      </div>
    </div>
  );
}
