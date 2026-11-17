"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

export default function Header() {
  const pathname = usePathname();

  type NavItem = {
    name: string;
    href: string;
    external?: boolean;
  };

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    // { name: "Sample", href: "https://larrisim.wixsite.com/index", external: true },
    { name: "Contact", href: "/contact" },
  ];

  const socials = [
    { name: "Instagram", href: "https://www.instagram.com/larrisim/", Icon: FaInstagram },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/larry-yucheng-chang-36442180/", Icon: FaLinkedin },
    { name: "Bluesky", href: "https://bsky.app/profile/larrisim.bsky.social", Icon: FaBluesky },
    { name: "YouTube", href: "https://www.youtube.com/@larrisim", Icon: FaYoutube },
  ];

  const linkStyle = (href: string): React.CSSProperties => ({
    position: "relative",
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: "0.9rem",
    fontWeight: pathname === href ? 600 : 400,
    color: pathname === href ? "#000" : "#555",
  });

  return (
    <header className="relative flex w-full items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-10">
      {/* LEFT — Menu */}
      <nav className="z-[2] flex flex-wrap items-center gap-4 sm:gap-5">
        {navItems.map((item) =>
          item.external ? (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle(item.href)}
              className="py-2"
            >
              {item.name}
              <span
                style={{
                  position: "absolute",
                  bottom: "-4px",
                  left: 0,
                  height: "2px",
                  width: "0%",
                  backgroundColor: "#000",
                  transition: "width 0.3s ease",
                }}
                className="underline"
              />
            </a>
          ) : (
            <Link
              key={item.name}
              href={item.href}
              style={linkStyle(item.href)}
              className="py-2"
            >
              {item.name}
              <span
                style={{
                  position: "absolute",
                  bottom: "-4px",
                  left: 0,
                  height: "2px",
                  width: "0%",
                  backgroundColor: "#000",
                  transition: "width 0.3s ease",
                }}
                className="underline"
              />
            </Link>
          )
        )}
      </nav>

      {/* CENTER — Logo.
          On mobile the logo sits fully below the nav row so it can't cover
          the links; on desktop it keeps the original half-overlap. */}
      <div className="absolute left-1/2 top-full z-[1] -translate-x-1/2 translate-y-0 lg:-translate-y-1/2">
        <Link href="/" aria-label="Larry Chang — home">
          <Image
            src="/images/logo_new.png"
            alt="Larry Chang logo"
            width={260}
            height={140}
            className="h-auto w-[170px] sm:w-[220px] lg:w-[260px]"
            priority
          />
        </Link>
      </div>

      {/* RIGHT — Social Icons */}
      <div className="z-[2] flex items-center gap-1 sm:gap-2">
        {socials.map(({ name, href, Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="flex items-center justify-center p-2"
          >
            <Icon style={{ width: "20px", height: "20px", cursor: "pointer" }} />
          </a>
        ))}
      </div>

      {/* Hover underline style */}
      <style jsx>{`
        nav a:hover span.underline {
          width: 100%;
        }
      `}</style>
    </header>
  );
}
