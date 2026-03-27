import type { MouseEvent, ReactNode } from "react";

type AppLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
};

export function AppLink({ children, className, href }: AppLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const isModifiedClick =
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0;

    const isExternal = href.startsWith("http");

    if (isModifiedClick || isExternal) {
      return;
    }

    event.preventDefault();
    if (href.startsWith("/")) {
      window.history.pushState({}, "", href);
      window.dispatchEvent(new PopStateEvent("popstate"));
      return;
    }

    if (href === "#") {
      return;
    }

    if (href.startsWith("#")) {
      window.location.hash = href.slice(1);
    }
  };

  return (
    <a className={className} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}
