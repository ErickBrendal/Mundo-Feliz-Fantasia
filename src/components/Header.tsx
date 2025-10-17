"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Loja" },
    { href: "/about", label: "Quem Somos" },
    { href: "/wholesale", label: "Atacado" },
    { href: "/contact", label: "Contato" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/assets/logo_moderno.png"
              alt="Mundo Feliz Fantasia"
              width={60}
              height={60}
              className="w-12 h-12 md:w-14 md:h-14"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-teal">Mundo Feliz</h1>
              <p className="text-sm text-gold">Fantasia</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-teal hover:text-gold transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              className="p-2 hover:bg-teal/10 rounded-full transition-colors"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5 text-teal" />
            </button>
            <button
              className="p-2 hover:bg-teal/10 rounded-full transition-colors relative"
              aria-label="Carrinho"
            >
              <ShoppingCart className="w-5 h-5 text-teal" />
              <span className="absolute -top-1 -right-1 bg-gold text-teal text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-teal/10 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-teal" />
              ) : (
                <Menu className="w-6 h-6 text-teal" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 border-t border-teal/20 pt-4"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="block py-3 text-teal hover:text-gold transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

