import { AppLink } from "./AppLink";

const footerColumns = [
  {
    title: "产品",
    items: ["概览", "解决方案", "价格", "客户支持"],
  },
  {
    title: "公司",
    items: ["关于我们", "投资", "工作机会", "Blog"],
  },
  {
    title: "支持",
    items: ["联系我们", "文档", "在线支持", "FAQ"],
  },
  {
    title: "法律",
    items: ["服务协议", "隐私政策", "Cookie 设置"],
  },
];

export function Footer() {
  return (
    <div className="flex w-full justify-center border-t border-white/10 bg-slate-950/85 backdrop-blur">
      <footer className="w-full max-w-6xl px-4 md:px-8">
        <div className="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
          <div className="col-span-full lg:col-span-2">
            <div className="mb-4 lg:-mt-2">
              <AppLink
                className="inline-flex items-center gap-2 text-xl font-bold text-gray-100 md:text-2xl"
                href="/"
              >
                <img
                  alt="DemoSay logo"
                  className="h-6 w-6 object-contain"
                  src="/logo.png"
                />
                DemoSay
              </AppLink>
            </div>
            <p className="mb-6 text-slate-400 sm:pr-8">
              DemoSay - You Demo, I Say
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <div className="mb-4 font-bold uppercase tracking-widest text-slate-100">
                {column.title}
              </div>
              <nav className="flex flex-col gap-4">
                {column.items.map((item) => (
                  <a
                    key={item}
                    className="text-slate-400 transition duration-100 hover:text-cyan-300 active:text-cyan-200"
                    href="#"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
          © 2026 demosay.com. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
