import GlassContainer from "@/components/GlassContainer";
import { Truck, Shield, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "Free worldwide shipping on orders over $100",
  },
  {
    icon: Shield,
    title: "Authenticity Guarantee",
    desc: "All products are authentic handcrafted pieces",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    desc: "30-day return policy for your peace of mind",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 w-full max-w-[1400px] mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <GlassContainer key={index} className="text-center p-6">
            <feature.icon className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="font-display text-xl text-emerald dark:text-gold mb-2">
              {feature.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300">{feature.desc}</p>
          </GlassContainer>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
