import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImageMobile from "@/assets/hero-section.png";
import heroImageDesktop from "@/assets/hero-desktop.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-center bg-cover bg-fixed md:bg-scroll">
      {/* Mobile Background */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-fixed md:hidden`}
        style={{ backgroundImage: `url('${heroImageMobile}')` }}
      />

      {/* Desktop Background */}
      <div
        className={`absolute inset-0 bg-cover bg-center hidden md:block`}
        style={{ backgroundImage: `url('${heroImageDesktop}')` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 md:bg-black/30 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row h-full">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 md:p-16 bg-white/10 backdrop-blur-md border-r border-white/10 rounded-none md:rounded-tr-[3rem] md:rounded-br-[3rem] shadow-lg">
          <div className="max-w-md text-center md:text-right text-white">
            <h1 className="hidden md:block text-4xl md:text-6xl font-extrabold font-serif mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-md">
              Moroccan Handcrafted Jewelry
            </h1>

            <div className="mt-10 flex flex-col sm:flex-row sm:justify-center md:justify-end gap-4 w-full max-w-xs mx-auto sm:max-w-none">
              <Link to="/products" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full rounded-glass border border-gold bg-transparent text-gold font-medium hover:bg-gold hover:text-white transition duration-300 shadow-gold"
                >
                  Shop Collection
                </Button>
              </Link>

              <Link to="/products" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full rounded-glass bg-gold text-white font-semibold hover:bg-gold/90 shadow-gold transition duration-300"
                >
                  View Lookbook
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right side spacing */}
        <div className="hidden md:block md:w-1/2" />
      </div>
    </section>
  );
};

export default HeroSection;
