import GlassContainer from "./GlassContainer";
import { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
    setEmail("");
  };

  return (
    <GlassContainer className="mx-auto w-full max-w-2xl py-8 flex flex-col items-center mt-12 mb-5 shadow-glass bg-glassBg/75 dark:bg-glassDark/75 border-gold/40">
      <h2 className="display text-2xl text-gold mb-2">
        Sign up for our newsletter
      </h2>
      <p className="mb-3 text-center text-zinc-500">
        Get exclusive offers & be first to know when new treasures arrive.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-sm gap-2 mt-2 items-center"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-3 py-2 rounded-l-glass border border-gold/30 focus:border-gold outline-none bg-transparent placeholder:text-zinc-400"
          placeholder="you@email.com"
        />
        <button
          type="submit"
          className="font-bold py-2 px-4 rounded-r-glass bg-gold text-white hover:bg-gold/90 transition"
        >
          {submitted ? "Subscribed!" : "Subscribe"}
        </button>
      </form>
    </GlassContainer>
  );
};

export default NewsletterForm;
