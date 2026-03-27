import { useState } from "react";
import { panelClassName, primaryButtonClassName } from "../ui";

export function PlayPage() {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(""); // ✅ 用来存提示文案

  const handleSubmit = () => {
    const normalized = answer.trim().toLowerCase();

    if (normalized === "i get it") {
      setResult("正确提交，随后系统会奖励你 1 Sui");
    } else {
      setResult("错误提交，试试输入 i get it");
    }

    console.log("用户输入：", answer);
  };

  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="mx-auto min-w-3xl px-4 md:px-8">
        <div className={`${panelClassName} mb-10 p-8 shadow-xl shadow-cyan-950/10 md:mb-16`}>

          {/* 标题 */}
          <div className="flex flex-col items-center gap-6 pb-8">
            <h2 className="text-center text-2xl font-bold text-slate-50 lg:text-3xl">
              Demo 01
            </h2>
            <p>EVE Frontier 101</p>
          </div>

          {/* 题目 */}
          <div className="mx-auto flex flex-col items-start gap-4 max-w-3xl text-left text-slate-300 md:text-lg">
            <h2 className="text-gray-400">- You Demo:</h2>
            <p>EVE Frontier 由 CCP 开发和运营。CCP Games 已确认，EVE Frontier 将在 Sui 区块链上推出，利用其低延迟性能和可扩展性，实现工作室长期的“永久游戏”愿景。</p>

            <h2 className="text-gray-400">- I Say:</h2>

            {/* 输入框 */}
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="请输入你的答案..."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSubmit(); // ✅ 回车提交
              }}
            />

            {/* 提交按钮 */}
            <button
              onClick={handleSubmit}
              className="mt-2 rounded-xl bg-cyan-400 px-6 py-2 font-medium text-slate-900 hover:bg-cyan-300"
            >
              提交答案
            </button>

            {/* ✅ 提示文案 */}
            {result && (
              <p
                className={`mt-2 font-medium ${
                  result.includes("正确")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {result}
              </p>
            )}
          </div>

          {/* 翻页按钮 */}
          <div className="mx-auto py-16 flex justify-between max-w-3xl gap-4 text-center text-slate-300 md:text-lg">
            <button className={`${primaryButtonClassName} px-8 py-3 font-medium shadow-sm`}>
              上一题
            </button>
            <button className={`${primaryButtonClassName} px-8 py-3 font-medium shadow-sm`}>
              下一题
            </button>
          </div>

          {/* 快捷键 */}
          <div className="mx-auto my-8 max-w-3xl text-left text-slate-300 md:text-lg">
            <h2 className="font-semibold text-slate-50">快捷键</h2>
            <p>- Command + [: 发音读出答案</p>
            <p>- Command + ]: 文本显示答案</p>
            <p>通常输入 i get it 就是正确答案，获得 Sui Coin.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
