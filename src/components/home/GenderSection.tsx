import { useState } from "react";
import { cn } from "@/lib/utils";
import GlassContainer from "@/components/GlassContainer";
import { Button } from "@/components/ui/button";
import menImage from "@/assets/hero-desktop-men.png";
import womenImage from "@/assets/gender-section-women.jpg";
import { Link } from "react-router-dom";
import { Gem, Sparkles, CircleEllipsis } from "lucide-react";

const GenderSection = () => {
  const [expanded, setExpanded] = useState<"men" | "women" | null>(null);

  return (
    <section className="flex justify-center items-center py-16 px-4 w-full max-w-[1100px] mx-auto">
      <div className="relative w-full max-w-3xl h-80 md:h-96 rounded-2xl shadow-xl overflow-hidden bg-white/10 backdrop-blur-md">
        {/* Men Half (Left) */}
        <div
          className={cn(
            "absolute top-0 left-0 h-full transition-all duration-500 ease-in-out overflow-hidden",
            expanded === "men" ? "w-full z-20 shadow-lg" : "w-1/2 z-10"
          )}
        >
          {/* Background image */}
          <div
            className="h-full w-full bg-cover bg-center transition-all duration-500"
            style={{
              backgroundImage: `url(${menImage})`,
              filter: expanded === "women" ? "grayscale(1) blur(2px)" : "none",
              clipPath:
                expanded === "men"
                  ? "none"
                  : "polygon(0 0,100% 0,100% 100%,0 100%)",
            }}
          >
            {/* Glass overlay */}
            <div
              className={cn(
                "absolute inset-0 transition-all duration-500",
                expanded === "men"
                  ? "bg-black/30 backdrop-blur-[2px] opacity-0"
                  : "bg-white/20 backdrop-blur-xl"
              )}
            />

            {/* Content */}
            <div
              className={cn(
                "absolute left-0 top-0 h-full w-full flex flex-col items-start justify-center px-4 sm:px-7 py-6 sm:py-12 transition-all duration-500",
                expanded === "men" ? "overflow-y-auto" : "overflow-hidden"
              )}
            >
              <h3
                className={cn(
                  "font-display text-xl sm:text-2xl md:text-3xl text-white mb-4 animate-fade-in",
                  expanded === "men" ? "drop-shadow-lg" : ""
                )}
              >
                Men's Collection
              </h3>

              {/* Expanded content */}
              {expanded === "men" && (
                <div className="animate-fade-in w-full">
                  <div className="flex  gap-4">
                    <Link
                      to="/category/rings"
                      className="bg-white/10 backdrop-blur-sm p-4 rounded-glass w-full sm:w-auto min-w-[110px] hover:bg-white/20 transition cursor-pointer"
                    >
                      <Gem className="text-gold mb-2" />
                      <h4 className="text-gold font-semibold mb-2">Rings</h4>
                      <p className="text-white/80 text-sm">
                        Silver & gold rings
                      </p>
                    </Link>

                    <Link
                      to="/category/necklaces"
                      className="bg-white/10 backdrop-blur-sm p-4 rounded-glass w-full sm:w-auto min-w-[110px] hover:bg-white/20 transition cursor-pointer"
                    >
                      <Sparkles className="text-gold mb-2" />
                      <h4 className="text-gold font-semibold mb-2">
                        Necklaces
                      </h4>
                      <p className="text-white/80 text-sm">Pendant necklaces</p>
                    </Link>

                    <Link
                      to="/category/bracelets"
                      className="bg-white/10 backdrop-blur-sm p-4 rounded-glass w-full sm:w-auto min-w-[110px] hover:bg-white/20 transition cursor-pointer"
                    >
                      <CircleEllipsis className="text-gold mb-2" />
                      <h4 className="text-gold font-semibold mb-2">
                        Bracelets
                      </h4>
                      <p className="text-white/80 text-sm">Leather & metal</p>
                    </Link>
                  </div>

                  <div className="mt-6 w-full text-center">
                    <Button
                      className="w-full sm:w-auto"
                      variant="secondary"
                      onClick={() => setExpanded(null)}
                    >
                      Hide
                    </Button>
                  </div>
                </div>
              )}

              {/* Collapse content */}
              {expanded !== "men" && (
                <Button
                  className="mt-4 animate-fade-in"
                  variant="secondary"
                  onClick={() => setExpanded("men")}
                >
                  Show More
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Women Half (Right) */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full transition-all duration-500 ease-in-out overflow-hidden",
            expanded === "women" ? "w-full z-20 shadow-lg" : "w-1/2 z-10"
          )}
        >
          <div
            className="h-full w-full bg-cover bg-center transition-all duration-500"
            style={{
              backgroundImage: `url(${womenImage})`,
              filter: expanded === "men" ? "grayscale(1) blur(2px)" : "none",
              clipPath:
                expanded === "women"
                  ? "none"
                  : "polygon(0 0,100% 0,100% 100%,0 100%)",
            }}
          >
            {/* Glass overlay */}
            <div
              className={cn(
                "absolute inset-0 transition-all duration-500",
                expanded === "women"
                  ? "bg-black/30 backdrop-blur-[2px] opacity-0"
                  : "bg-white/20 backdrop-blur-xl"
              )}
            />

            {/* Content */}
            <div
              className={cn(
                "absolute right-0 top-0 h-full w-full flex flex-col items-end justify-center px-4 sm:px-7 py-6 sm:py-12 transition-all duration-500",
                expanded === "women"
                  ? "items-start overflow-y-auto"
                  : "overflow-hidden w-[85%]"
              )}
            >
              <h3
                className={cn(
                  "font-display text-xl sm:text-2xl md:text-3xl text-white mb-4 animate-fade-in",
                  expanded === "women" ? "drop-shadow-lg" : ""
                )}
              >
                Women's Collection
              </h3>

              {expanded === "women" && (
                <div className="animate-fade-in w-full text-left">
                  <div className="flex gap-4">
                    <Link
                      to="/category/earrings"
                      className="bg-white/10 backdrop-blur-sm p-4 rounded-glass w-full sm:w-auto min-w-[110px] hover:bg-white/20 transition cursor-pointer"
                    >
                      <CircleEllipsis className="text-gold mb-2" />
                      <h4 className="text-gold font-semibold mb-2">Earrings</h4>
                      <p className="text-white/80 text-sm">Mosaic & enamel</p>
                    </Link>

                    <Link
                      to="/category/necklaces"
                      className="bg-white/10 backdrop-blur-sm p-4 rounded-glass w-full sm:w-auto min-w-[110px] hover:bg-white/20 transition cursor-pointer"
                    >
                      <Sparkles className="text-gold mb-2" />
                      <h4 className="text-gold font-semibold mb-2">
                        Necklaces
                      </h4>
                      <p className="text-white/80 text-sm">Delicate chains</p>
                    </Link>

                    <Link
                      to="/category/rings"
                      className="bg-white/10 backdrop-blur-sm p-4 rounded-glass w-full sm:w-auto min-w-[110px] hover:bg-white/20 transition cursor-pointer"
                    >
                      <Gem className="text-gold mb-2" />
                      <h4 className="text-gold font-semibold mb-2">Rings</h4>
                      <p className="text-white/80 text-sm">
                        Statement & delicate
                      </p>
                    </Link>
                  </div>

                  <div className="mt-6 w-full text-center">
                    <Button
                      className="w-full sm:w-auto"
                      variant="secondary"
                      onClick={() => setExpanded(null)}
                    >
                      Hide
                    </Button>
                  </div>
                </div>
              )}

              {expanded !== "women" && (
                <Button
                  className="mt-4 animate-fade-in"
                  variant="secondary"
                  onClick={() => setExpanded("women")}
                >
                  Show More
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Center divider only if not expanded */}
        {expanded === null && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gold shadow-lg z-30"></div>
        )}
      </div>
    </section>
  );
};

export default GenderSection;
