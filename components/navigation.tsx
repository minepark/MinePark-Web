"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Tienda", href: "/store" },
    { name: "Staff", href: "/staff" },
    { name: "Votar", href: "/voting" },
    { name: "Acerca de", href: "/about" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(15, 23, 42, 0.8)"
          : "rgba(15, 23, 42, 0.4)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: scrolled
          ? "1px solid rgba(255, 255, 255, 0.15)"
          : "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: scrolled
          ? "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
          : "0 4px 16px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-3 group relative"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ transform: "scale(1.2)" }}
                />
                <div
                  className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-xl neon-glow-green group-hover:scale-110 transition-all duration-300 group-hover:rotate-3"
                >
                  <Image
                    src="/Logo.png"
                    alt="MinePark Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-white neon-text-green group-hover:text-green-300 transition-all duration-300">
                  MinePark
                </span>
                <span className="text-xs text-gray-400 hidden sm:block opacity-0 sm:opacity-100 group-hover:text-gray-300 transition-colors">
                  Supervivencia Definitiva
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group"
                  style={{
                    color: isActive ? "rgb(74, 222, 128)" : "rgb(209, 213, 219)",
                    padding: "0.625rem 1.25rem",
                    borderRadius: "0.75rem",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    textDecoration: "none",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "rgb(74, 222, 128)"
                      e.currentTarget.style.backgroundColor = "rgba(34, 197, 94, 0.1)"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "rgb(209, 213, 219)"
                      e.currentTarget.style.backgroundColor = "transparent"
                    }
                  }}
                >
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20"
                      style={{
                        animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 h-0.5 w-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
                      style={{
                        transform: "translateX(-50%)",
                        boxShadow: "0 0 8px rgba(34, 197, 94, 0.6)",
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Discord & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Discord Button - Desktop */}
            <a
              href="https://discord.gg/minepark"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-2 relative group"
              style={{
                background: "linear-gradient(135deg, #5865F2 0%, #4752C4 100%)",
                color: "white",
                fontWeight: "500",
                padding: "0.625rem 1.25rem",
                borderRadius: "0.75rem",
                cursor: "pointer",
                textDecoration: "none",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 4px 14px 0 rgba(88, 101, 242, 0.39)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px) scale(1.02)"
                e.currentTarget.style.boxShadow = "0 6px 20px 0 rgba(88, 101, 242, 0.5)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)"
                e.currentTarget.style.boxShadow = "0 4px 14px 0 rgba(88, 101, 242, 0.39)"
              }}
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:rotate-12"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <span>Discord</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative p-2 rounded-lg transition-all duration-300"
              style={{
                color: "rgb(209, 213, 219)",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "rgb(74, 222, 128)"
                e.currentTarget.style.backgroundColor = "rgba(34, 197, 94, 0.1)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgb(209, 213, 219)"
                e.currentTarget.style.backgroundColor = "transparent"
              }}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div
          className="px-4 pt-4 pb-6 space-y-2"
          style={{
            background: "rgba(15, 23, 42, 0.95)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
          }}
        >
          {navItems.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className="block relative group"
                style={{
                  color: isActive ? "rgb(74, 222, 128)" : "rgb(209, 213, 219)",
                  padding: "0.875rem 1rem",
                  borderRadius: "0.75rem",
                  textDecoration: "none",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  animationDelay: `${index * 50}ms`,
                }}
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "rgb(74, 222, 128)"
                    e.currentTarget.style.backgroundColor = "rgba(34, 197, 94, 0.1)"
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "rgb(209, 213, 219)"
                    e.currentTarget.style.backgroundColor = "transparent"
                  }
                }}
              >
                {isActive && (
                  <span
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-emerald-400 rounded-r-full"
                    style={{
                      boxShadow: "0 0 8px rgba(34, 197, 94, 0.6)",
                    }}
                  />
                )}
                <span className="relative z-10 flex items-center">
                  {item.name}
                  {isActive && (
                    <span className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  )}
                </span>
              </Link>
            )
          })}
          <a
            href="https://discord.gg/minepark"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 mt-4 py-3 rounded-lg font-medium transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #5865F2 0%, #4752C4 100%)",
              color: "white",
              textDecoration: "none",
              boxShadow: "0 4px 14px 0 rgba(88, 101, 242, 0.39)",
            }}
            onClick={() => setIsOpen(false)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)"
              e.currentTarget.style.boxShadow = "0 6px 20px 0 rgba(88, 101, 242, 0.5)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)"
              e.currentTarget.style.boxShadow = "0 4px 14px 0 rgba(88, 101, 242, 0.39)"
            }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            <span>Unirse a Discord</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
