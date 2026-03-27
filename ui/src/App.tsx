import { useCurrentAccount } from "@mysten/dapp-kit-react";
import { ConnectButton } from "@mysten/dapp-kit-react/ui";
import { useEffect, useState } from "react";
import { AppLink } from "./components/AppLink";
import { Footer } from "./components/Footer";
import { CreateGreeting } from "./CreateGreeting";
import { Greeting } from "./Greeting";
import { HomePage } from "./pages/HomePage";
import { PackageDetailPage } from "./pages/PackageDetailPage";
import { PackagesPage } from "./pages/PackagesPage";
import { PlayPage } from "./pages/PlayPage";
import { WalrusJsonPage } from "./pages/WalrusJsonPage";
import { getRouteFromPathname, headerLinks, type Route } from "./routes";
import { appShellClassName, navLinkClassName } from "./ui";

function App() {
  const currentAccount = useCurrentAccount();
  const [route, setRoute] = useState<Route>(() =>
    getRouteFromPathname(window.location.pathname),
  );
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(getRouteFromPathname(window.location.pathname));
      setIsMobileNavOpen(false);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  let page = <HomePage />;

  switch (route.name) {
    case "package-list":
      page = <PackagesPage />;
      break;
    case "package":
      page = <PackageDetailPage id={route.id} />;
      break;
    case "play":
      page = <PlayPage />;
      break;
    case "dapp":
      page = currentAccount ? (
        <CreateGreeting
          onCreated={(id) => {
            window.history.pushState({}, "", `/greeting/${id}`);
            window.dispatchEvent(new PopStateEvent("popstate"));
          }}
        />
      ) : (
        <div className="flex min-h-[24rem] items-center justify-center">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-100">
            Please connect your wallet
          </h2>
        </div>
      );
      break;
    case "greeting":
      page = <Greeting id={route.id} />;
      break;
    case "walrus-json":
      page = <WalrusJsonPage />;
      break;
    default:
      page = <HomePage />;
      break;
  }

  return (
    <div className={`flex flex-col items-center ${appShellClassName}`}>
      <header
        className="sticky top-0 z-10 flex w-full justify-center border-b border-white/10 bg-slate-950/85 backdrop-blur"
      >
        <div
          className="flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6"
        >
          <div className="flex items-center gap-6">
            <AppLink
              className="inline-flex items-center gap-2 text-xl font-bold text-slate-50 md:text-3xl"
              href="/"
            >
              <img
                alt="DemoSay logo"
                className="h-6 w-6 object-contain"
                src="/logo.png"
              />
              <span>DemoSay</span>
            </AppLink>

            <nav className="hidden gap-6 md:flex">
              {headerLinks.map((link) => (
                <AppLink
                  key={link.href}
                  className={navLinkClassName}
                  href={link.href}
                >
                  {link.label}
                </AppLink>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button
              aria-expanded={isMobileNavOpen}
              aria-label="Toggle navigation menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-slate-100 transition hover:bg-white/12 md:hidden"
              onClick={() => {
                setIsMobileNavOpen((open) => !open);
              }}
              type="button"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                {isMobileNavOpen ? (
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </button>
            <ConnectButton />
          </div>
        </div>
      </header>

      {isMobileNavOpen && (
        <div className="fixed inset-0 z-20 md:hidden">
          <button
            aria-label="Close navigation menu"
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => {
              setIsMobileNavOpen(false);
            }}
            type="button"
          />
          <div className="absolute right-0 top-0 flex h-full w-72 max-w-[85vw] flex-col border-l border-white/10 bg-slate-950/95 px-5 py-6 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
                Navigate
              </span>
              <button
                aria-label="Close navigation menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-slate-100 transition hover:bg-white/12"
                onClick={() => {
                  setIsMobileNavOpen(false);
                }}
                type="button"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-3">
              {headerLinks.map((link) => (
                <AppLink
                  key={link.href}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base font-semibold text-cyan-100 transition hover:bg-white/10 hover:text-cyan-200"
                  href={link.href}
                >
                  {link.label}
                </AppLink>
              ))}
            </nav>
          </div>
        </div>
      )}

      <div className="pt-16">
        {page}
      </div>

      <Footer />
    </div>
  );
}

export default App;
