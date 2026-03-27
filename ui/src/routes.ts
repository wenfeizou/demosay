import { isValidSuiObjectId } from "@mysten/sui/utils";

export type Route =
  | { name: "home" }
  | { name: "package-list" }
  | { name: "package"; id: string }
  | { name: "play"; id: string }
  | { name: "dapp" }
  | { name: "walrus-json" }
  | { name: "greeting"; id: string };

export const headerLinks = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Demo Packages" },
  { href: "/play/0e3s8r8KlHMNhzTT1BYIto96VAvTvJdLVecTRNihJFg", label: "Play" },
  // { href: "/dapp", label: "On-chain Demo" },
  { href: "/upload", label: "Upload Demo" },
];

export function getRouteFromPathname(pathname: string): Route {
  const value = pathname.replace(/^\/+/, "").replace(/\/$/, "");

  if (!value) {
    return { name: "home" };
  }

  const greetingPrefix = "greeting/";
  if (value.startsWith(greetingPrefix)) {
    const id = value.slice(greetingPrefix.length);
    if (isValidSuiObjectId(id)) {
      return { name: "greeting", id };
    }
  }

  switch (value) {
    case "packages":
      return { name: "package-list" };
    default:
      if (value.startsWith("packages/")) {
        return { name: "package", id: value.slice("packages/".length) };
      }
      break;
  }

  switch (value) {
    case "dapp":
      return { name: "dapp" };
    case "upload":
      return { name: "walrus-json" };
    default:
      if (value.startsWith("play/")) {
        return { name: "play", id: value.slice("play/".length) };
      } else {
        return { name: "home" };
      }
  }
}
