import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About & Contact", path: "/about-contact" },
];

const categories = [
  { name: "All Products", path: "/products" },
  { name: "Jewelry", path: "/products?category=jewelry" },
  { name: "Bags", path: "/products?category=bags" },
  { name: "Accessories", path: "/products?category=accessories" },
];

const MobileNav = () => {
  const location = useLocation();
  const [shopOpen, setShopOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // for controlling sheet state

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setShopOpen(false);
  }, [location.pathname]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          className="inline-flex md:hidden items-center justify-center p-2 rounded-full border border-gold/40 bg-glassBg dark:bg-glassDark shadow-glass"
          aria-label="Open navigation"
        >
          <Menu className="text-gold" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-glassBg dark:bg-glassDark border-none w-[75vw] max-w-xs py-0 flex flex-col"
      >
        <div className="flex w-full justify-between items-center px-4 pt-4 pb-2">
          <span className="display text-xl text-gold tracking-tight">
            Maroc Chic
          </span>
          <button
            aria-label="Close navigation"
            onClick={() => setIsOpen(false)}
            className="rounded-full p-1 hover:bg-gold/10 transition"
          >
            <X className="text-gold" />
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-3 px-4">
          {navLinks.map((link) => (
            <Link
              to={link.path}
              key={link.path}
              onClick={() => setIsOpen(false)}
              className={`py-3 px-3 rounded-lg text-base font-medium text-foreground dark:text-white ${
                location.pathname === link.path
                  ? "text-gold bg-gold/10"
                  : "hover:text-gold"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Shop dropdown */}
          <div>
            <button
              onClick={() => setShopOpen(!shopOpen)}
              className="w-full flex items-center justify-between py-3 px-3 rounded-lg text-base font-medium text-foreground dark:text-white hover:text-gold"
            >
              Shop
              {shopOpen ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>
            {shopOpen && (
              <div className="ml-4 mt-2 space-y-2">
                {categories.map((category) => (
                  <Link
                    key={category.path}
                    to={category.path}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 px-3 rounded-lg text-sm text-foreground dark:text-white hover:text-gold hover:bg-gold/10"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
