"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 40px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* LEFT — Menu */}
      <nav style={{ display: "flex", gap: "20px", zIndex: 2 }}>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            style={{
              position: "relative",
              textDecoration: "none",
              textTransform: "uppercase",
              fontSize: "0.9rem",
              fontWeight: pathname === item.href ? 600 : 400,
              color: pathname === item.href ? "#000" : "#555",
            }}
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
        ))}
      </nav>

      {/* CENTER — Logo */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "100%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      >
        <Link href="/">
          <Image src="/images/logo_new.png" alt="Logo" width={260} height={140} />
        </Link>
      </div>

      {/* RIGHT — Social Icons */}
      <div style={{ display: "flex", gap: "15px", zIndex: 2 }}>
        <a href="https://www.instagram.com/larrisim/" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={{ width: "20px", height: "20px", cursor: "pointer" }} />
        </a>
        <a href="https://www.linkedin.com/in/larry-yucheng-chang-36442180/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={{ width: "20px", height: "20px", cursor: "pointer" }} />
        </a>
        <a href="https://bsky.app/profile/larrisim.bsky.social" target="_blank" rel="noopener noreferrer">
          <FaBluesky style={{ width: "20px", height: "20px", cursor: "pointer" }} />
        </a>
        <a href="https://www.youtube.com/@larrisim" target="_blank" rel="noopener noreferrer">
          <FaYoutube style={{ width: "20px", height: "20px", cursor: "pointer" }} />
        </a>
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
