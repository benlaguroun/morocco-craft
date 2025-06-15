import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlassContainer from "@/components/GlassContainer";

const PrivacyPolicy = () => (
  <div className="w-full min-h-screen bg-gradient-to-br from-sand via-white to-emerald-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-stone">
    <Header />
    <main className="max-w-[1000px] mx-auto px-3 py-10">
      <GlassContainer className="p-8">
        <h2 className="display text-2xl text-gold mb-4">Privacy Policy</h2>
        <p className="mb-4 text-zinc-700 dark:text-zinc-200">
          Maroc Chic values your privacy. We do not sell, trade, or rent users’
          personal identification information.
        </p>
        <p className="mb-4 text-zinc-700 dark:text-zinc-200">
          Information you provide (such as your name and email) is only used to
          process your order or to respond to your enquiry.
        </p>
        <p className="mb-4 text-zinc-700 dark:text-zinc-200">
          Our website may use cookies to improve user experience. By using our
          site, you accept our privacy practices described here.
        </p>
        <p className="mb-4 text-zinc-700 dark:text-zinc-200">
          For questions regarding your privacy, please contact us at{" "}
          <a href="mailto:info@marocchic.com" className="text-gold underline">
            info@marocchic.com
          </a>
          .
        </p>
      </GlassContainer>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;
