import { useState } from "react";
import { cn } from "@/lib/utils";
import GlassContainer from "@/components/GlassContainer";
import { Button } from "@/components/ui/button";

const menImage =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80";
const womenImage =
  "https://images.unsplash.com/photo-1494790108755-2616c9e2ddd5?auto=format&fit=crop&w=800&q=80";

const GenderSection = () => {
  const [expanded, setExpanded] = useState<"men" | "women" | null>(null);

  return (
    <section className="flex justify-center items-center py-16 px-4 w-full max-w-[1100px] mx-auto">
      <div className="relative w-full max-w-3xl h-80 md:h-96">
        {/* Men Half (Left) */}
        <div
          className={cn(
            "absolute top-0 left-0 h-full transition-all duration-500 ease-in-out overflow-hidden",
            expanded === "men" ? "w-full z-20 shadow-lg" : "w-1/2 z-10"
          )}
        >
          {/* Show full image when expanded, half otherwise */}
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
            {/* Glass overlay/frosted area */}
            <div
              className={cn(
                "absolute inset-0 transition-all duration-500",
                expanded === "men"
                  ? "bg-black/30 backdrop-blur-[2px] opacity-0"
                  : "bg-white/20 backdrop-blur-xl"
              )}
            />
            {/* Left side content */}
            <div
              className={cn(
                "absolute left-0 top-0 h-full flex flex-col items-start justify-center p-7 transition-all duration-500",
                expanded === "men" ? "w-full" : "w-[85%]"
              )}
            >
              <h3
                className={cn(
                  "font-display text-2xl md:text-3xl text-white mb-3 animate-fade-in",
                  expanded === "men" ? "drop-shadow-lg" : ""
                )}
              >
                Men's Collection
              </h3>
              {expanded === "men" && (
                <div className="animate-fade-in">
                  <p className="text-white/90 text-lg mb-6 max-w-md">
                    Discover our sophisticated collection of men's jewelry
                    featuring traditional Moroccan craftsmanship. From elegant
                    rings to statement necklaces, each piece tells a story of
                    heritage and style.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-glass min-w-[110px]">
                      <h4 className="text-gold font-semibold mb-2">Rings</h4>
                      <p className="text-white/80 text-sm">
                        Silver & gold rings
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-glass min-w-[110px]">
                      <h4 className="text-gold font-semibold mb-2">
                        Necklaces
                      </h4>
                      <p className="text-white/80 text-sm">Pendant necklaces</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-glass min-w-[110px]">
                      <h4 className="text-gold font-semibold mb-2">
                        Bracelets
                      </h4>
                      <p className="text-white/80 text-sm">Leather & metal</p>
                    </div>
                  </div>
                  <Button
                    className="mt-8"
                    variant="secondary"
                    onClick={() => setExpanded(null)}
                  >
                    Hide
                  </Button>
                </div>
              )}
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
          {/* Show full image when expanded, half otherwise */}
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
            {/* Glass overlay/frosted area */}
            <div
              className={cn(
                "absolute inset-0 transition-all duration-500",
                expanded === "women"
                  ? "bg-black/30 backdrop-blur-[2px] opacity-0"
                  : "bg-white/20 backdrop-blur-xl"
              )}
            />
            {/* Right side content */}
            <div
              className={cn(
                "absolute right-0 top-0 h-full flex flex-col items-end justify-center p-7 transition-all duration-500",
                expanded === "women" ? "w-full items-start" : "w-[85%]"
              )}
            >
              <h3
                className={cn(
                  "font-display text-2xl md:text-3xl text-white mb-3 animate-fade-in",
                  expanded === "women" ? "drop-shadow-lg" : ""
                )}
              >
                Women's Collection
              </h3>
              {expanded === "women" && (
                <div className="animate-fade-in text-left">
                  <p className="text-white/90 text-lg mb-6 max-w-md">
                    Explore our exquisite women's jewelry collection featuring
                    delicate Moroccan designs. From intricate earrings to
                    stunning necklaces, each piece celebrates feminine elegance.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-glass min-w-[110px]">
                      <h4 className="text-gold font-semibold mb-2">Earrings</h4>
                      <p className="text-white/80 text-sm">Mosaic & enamel</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-glass min-w-[110px]">
                      <h4 className="text-gold font-semibold mb-2">
                        Necklaces
                      </h4>
                      <p className="text-white/80 text-sm">Delicate chains</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-glass min-w-[110px]">
                      <h4 className="text-gold font-semibold mb-2">Rings</h4>
                      <p className="text-white/80 text-sm">
                        Statement & delicate
                      </p>
                    </div>
                  </div>
                  <Button
                    className="mt-8"
                    variant="secondary"
                    onClick={() => setExpanded(null)}
                  >
                    Hide
                  </Button>
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
