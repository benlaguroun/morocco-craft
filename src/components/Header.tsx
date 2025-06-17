import { ShoppingCart, User, ChevronDown } from "lucide-react";
import GlassContainer from "./GlassContainer";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 py-1 bg-transparent">
      <GlassContainer className="flex items-center justify-between px-2 sm:px-4 md:px-8 py-2 md:py-3 mx-auto max-w-[1400px] shadow-glass bg-glassBg/80 dark:bg-glassDark/80 border-gold">
        {/* Left: Logo/Brand & Mobile Nav */}
        <div className="flex items-center gap-2 md:gap-3">
          <MobileNav />
          <Link to="/" className="flex items-center gap-2">
            <span className="display text-xl sm:text-2xl md:text-3xl text-gold tracking-tight mt-0.5">
              Brace-Way
            </span>
            <span className="sr-only">Home</span>
          </Link>
        </div>

        {/* Nav, hide on mobile */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6 md:gap-10 items-center text-[1rem] md:text-lg">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.path}>
                  <Link
                    to={link.path}
                    className={`relative px-2 py-1 rounded-sm text-foreground dark:text-white ${
                      location.pathname === link.path
                        ? "text-gold underline underline-offset-4"
                        : "hover:text-gold transition"
                    }`}
                  >
                    {link.name}
                  </Link>
                </NavigationMenuItem>
              ))}

              {/* Shop dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent text-foreground dark:text-white hover:text-gold">
                  Shop
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[200px] gap-2 p-4">
                    {categories.map((category) => (
                      <Link
                        key={category.path}
                        to={category.path}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none text-foreground dark:text-white">
                          {category.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Right Side (mode, cart, user) */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-5">
          <ThemeToggle />
          <Link
            to="/cart"
            className="relative p-2 hover:bg-gold/10 rounded-full transition"
          >
            <ShoppingCart size={22} className="text-gold" />
            <span className="sr-only">View Cart</span>
          </Link>
          <button className="p-2 hover:bg-gold/10 rounded-full transition">
            <User size={22} className="text-gold" />
          </button>
        </div>
      </GlassContainer>
    </header>
  );
};

export default Header;
