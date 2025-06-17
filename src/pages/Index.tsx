import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/NewsletterForm";
import HeroSection from "@/components/home/HeroSection";
import GenderSection from "@/components/home/GenderSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import BestsellersSection from "@/components/home/BestsellersSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AboutSection from "@/components/home/AboutSection";

const Index = () => (
  <div className="w-full min-h-screen bg-gradient-to-br from-sand via-white to-emerald dark:from-zinc-900 dark:via-zinc-800 dark:to-stone">
    <Header />

    {/* Hero Section */}
    <HeroSection />

    {/* Features Section */}
    <FeaturesSection />

    {/* Gender Section */}
    <GenderSection />

    {/* Categories */}
    <CategoriesSection />

    {/* Popular Products */}
    <BestsellersSection />

    {/* Testimonials */}
    <TestimonialsSection />

    {/* About Section */}
    <AboutSection />

    {/* Newsletter */}
    <NewsletterForm />

    {/* Footer */}
    <Footer />
  </div>
);

export default Index;
